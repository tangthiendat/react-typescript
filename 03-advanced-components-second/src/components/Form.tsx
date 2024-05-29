import { type FormEvent, type ComponentPropsWithoutRef } from "react";

interface FormProps extends ComponentPropsWithoutRef<"form"> {
  onSave: (value: unknown) => void;
}

const Form: React.FC<FormProps> = ({ onSave, children, ...otherProps }) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    onSave(data);
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps}>
      {children}
    </form>
  );
};

export default Form;
