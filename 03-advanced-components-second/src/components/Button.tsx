import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  href?: never;
}

interface AnchorProps extends ComponentPropsWithoutRef<"a"> {
  href?: string;
}

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return "href" in props;
}

const Button: React.FC<ButtonProps | AnchorProps> = (props) => {
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
};

export default Button;
