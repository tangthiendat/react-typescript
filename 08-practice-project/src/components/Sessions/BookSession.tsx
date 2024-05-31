import { type FormEvent, useEffect, useRef } from "react";
import { bookSession, type Session } from "../../store/session-slice.ts";
import Modal, { ModalHandle } from "../UI/Modal.tsx";
import Input from "../UI/Input.tsx";
import Button from "../UI/Button.tsx";
import { useAppDispatch } from "../../store/hooks.ts";

interface BookSessionProps {
  session: Session;
  onDone: () => void;
}

const BookSession: React.FC<BookSessionProps> = ({ session, onDone }) => {
  const modal = useRef<ModalHandle>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    dispatch(bookSession(session));
    onDone();
  }

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book session</h2>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Your name" id="name" name="name" />
        <Input type="email" label="Your email" id="email" name="email" />
        <p className="actions">
          <Button onClick={onDone} textOnly>
            Cancel
          </Button>
          <Button type="submit">Book session</Button>
        </p>
      </form>
    </Modal>
  );
};

export default BookSession;
