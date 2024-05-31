import Button from "../UI/Button";

interface UpcomingSectionProps {
  session: {
    id: string;
    title: string;
    summary: string;
    date: string;
  };
  onCancel: () => void;
}

const UpcomingSection: React.FC<UpcomingSectionProps> = ({ session, onCancel }) => {
  return (
    <article className="upcoming-session">
      <div>
        <h3>{session.title}</h3>
        <p>{session.summary}</p>
        <time dateTime={new Date(session.date).toISOString()}>
          {new Date(session.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </time>
      </div>
      <p className="actions">
        <Button onClick={onCancel} textOnly>
          Cancel
        </Button>
      </p>
    </article>
  );
};

export default UpcomingSection;
