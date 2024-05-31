import SessionItem from "./SessionItem";

export interface ISessionItem {
  id: string;
  title: string;
  summary: string;
  image: string;
}

interface SessionsListProps {
  sessions: ISessionItem[];
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
