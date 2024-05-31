import SessionItem from "./SessionItem";

export interface Session {
  id: string;
  title: string;
  summary: string;
  image: string;
}

interface SessionsListProps {
  sessions: Session[];
}

const SessionsList: React.FC<SessionsListProps> = ({ sessions }) => {
  return (
    <ul id="sessions-list">
      {sessions?.map((session) => (
        <li key={session.id}>
          <SessionItem {...session} />
        </li>
      ))}
    </ul>
  );
};

export default SessionsList;
