import CourseGoal from "./components/CourseGoal";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import { useState } from "react";

interface CourseGoal {
  id: number;
  title: string;
  description: string;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {}

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <p>Your Course Goals</p>
      </Header>
      <button onClick={handleAddGoal}>Add Goals</button>
      <CourseGoal title="Learn React + TS">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}
