import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

interface BaseProps {
  textOnly?: boolean;
}

interface ButtonProps extends BaseProps, ComponentPropsWithoutRef<"button"> {
  to?: never;
}

interface ButtonLinksProps extends BaseProps, LinkProps {
  to: string;
}

function isButtonLinkProps(props: ButtonProps | ButtonLinksProps): props is ButtonLinksProps {
  return "to" in props;
}

const Button: React.FC<ButtonProps | ButtonLinksProps> = (props) => {
  if (isButtonLinkProps(props)) {
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link className={`button ${textOnly ? "button--text-only" : ""}`} {...otherProps}>
        {children}
      </Link>
    );
  }

  const { children, textOnly, ...otherProps } = props;
  return (
    <button className={`button ${textOnly ? "button--text-only" : ""}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
