import { FC } from "react";
import { TextProps } from "./types";
import "./text.scss";

const Text: FC<TextProps> = ({
  type,
  style,
  children,
  className = "",
}: TextProps) => {
  const Tag = type;

  return <Tag className={`text text--${style} ${className}`}>{children}</Tag>;
};

export default Text;
