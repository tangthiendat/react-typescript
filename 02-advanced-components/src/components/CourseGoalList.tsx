import { type ReactNode } from "react";
import { type CourseGoal as ICourseGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

interface CourseGoalListProps {
  goals: ICourseGoal[];
  onDelete: (id: number) => void;
}

const CourseGoalList: React.FC<CourseGoalListProps> = ({ goals, onDelete }) => {
  if (goals.length === 0) {
    return <InfoBox mode="hint">You have no course goals yet. Start adding some!</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
