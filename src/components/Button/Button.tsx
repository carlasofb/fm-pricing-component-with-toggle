import { FC } from "react";
import { ButtonProps } from "./types";
import "./button.scss";

const Button: FC<ButtonProps> = ({
  style = "primary",
  children,
  className = "",
}: ButtonProps) => (
  <button className={`button button--${style} ${className}`}>{children}</button>
);

export default Button;
