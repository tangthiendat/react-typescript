import Button from "../UI/Button";
import { ISessionItem as SessionItemProps } from "./SessionsList";

const SessionItem: React.FC<SessionItemProps> = ({ id, title, summary, image }) => {
  return (
    <article className="session-item">
      <img src={image} alt={title} />
      <div className="session-data">
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <p className="actions">
          <Button to={id}>Learn more</Button>
        </p>
      </div>
    </article>
  );
};

export default SessionItem;
