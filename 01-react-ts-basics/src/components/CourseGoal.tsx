type CourseGoalProps = {
  title: string;
  description: string;
};

const CourseGoal: React.FC<CourseGoalProps> = ({ title, description }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
