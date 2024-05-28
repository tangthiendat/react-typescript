import { FormEvent, useRef } from "react";

interface NewGoalProps {
  onAddGoal: (goal: string, summary: string) => void;
}

const NewGoal: React.FC<NewGoalProps> = ({ onAddGoal }) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current.value;
    const enteredSummary = summary.current.value;

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" name="goal" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Summary</label>
        <input type="text" name="summary" id="summary" ref={summary} />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
