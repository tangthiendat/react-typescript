// type CourseGoalProps = {
//   title: string;
//   children: ReactNode;
// };

// type CourseGoalProps = PropsWithChildren<{
//   title: string;
// }>;

interface CourseGoalProps {
  title: string;
  children?: React.ReactNode;
}

const CourseGoal: React.FC<CourseGoalProps> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
