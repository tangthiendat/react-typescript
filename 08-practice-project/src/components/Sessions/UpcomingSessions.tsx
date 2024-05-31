import { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../UI/Modal";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { cancelSession } from "../../store/session-slice";
import UpcomingSection from "./UpcomingSection";
import Button from "../UI/Button";

interface UpcomingSessionsProps {
  onClose: () => void;
}

const UpcomingSessions: React.FC<UpcomingSessionsProps> = ({ onClose }) => {
  const modal = useRef<ModalHandle>(null);
  const dispatch = useAppDispatch();
  const sessions = useAppSelector((state) => state.session.upcomingSessions);

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleCancelSession(sessionId: string): void {
    dispatch(cancelSession(sessionId));
  }

  const hasSession = sessions.length > 0;

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSession && (
        <ul>
          {sessions.map((session) => (
            <li key={session.id}>
              <UpcomingSection session={session} onCancel={() => handleCancelSession(session.id)} />
            </li>
          ))}
        </ul>
      )}
      {!hasSession && <p>No upcoming sessions.</p>}
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
};

export default UpcomingSessions;
