import { FC } from "react";
import { HeadingProps } from "./types";
import "./heading.scss";

const Heading: FC<HeadingProps> = ({
  level,
  style,
  children,
  className = "",
}: HeadingProps) => {
  const Level = level;
  const levelNumber = level[1];

  return (
    <Level
      className={`heading heading--${levelNumber} heading--${style} ${className}`}
    >
      {children}
    </Level>
  );
};

export default Heading;
