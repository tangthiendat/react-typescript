import { type ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  id: string;
}

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </div>
  );
};

export default Input;
