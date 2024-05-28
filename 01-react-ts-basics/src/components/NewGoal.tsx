import { FormEvent } from "react";

const NewGoal: React.FC = () => {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" name="goal" id="goal" />
      </p>
      <p>
        <label htmlFor="summary">Summary</label>
        <input type="text" name="summary" id="summary" />
      </p>
      <p>
        <button>Add goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
