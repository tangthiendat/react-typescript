import CourseGoal from "./CourseGoal";
import { CourseGoal as ICourseGoal } from "../App";

interface CourseGoalListProps {
  goals: ICourseGoal[];
  onDelete: (id: number) => void;
}

const CourseGoalList: React.FC<CourseGoalListProps> = ({ goals, onDelete }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
