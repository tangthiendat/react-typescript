// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

// type CourseGoalProps = PropsWithChildren<{
//   title: string;
// }>;

interface CourseGoalProps {
  id: number;
  title: string;
  children?: React.ReactNode;
  onDelete: (id: number) => void;
}

const CourseGoal: React.FC<CourseGoalProps> = ({ title, id, children, onDelete }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;
