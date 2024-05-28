import CourseGoal from "./CourseGoal";
import { CourseGoal as ICourseGoal } from "../App";

interface CourseGoalListProps {
  goals: ICourseGoal[];
}

const CourseGoalList: React.FC<CourseGoalListProps> = ({ goals }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
