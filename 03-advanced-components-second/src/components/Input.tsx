interface InputProps {
  id: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ id, label }) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </p>
  );
};

export default Input;
