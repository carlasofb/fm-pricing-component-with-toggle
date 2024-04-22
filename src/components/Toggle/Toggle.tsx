import { FC, useState } from "react";
import { ToggleProps } from "./types";
import "./toggle.scss";

const Toggle: FC<ToggleProps> = ({
  value,
  onClick,
  className = "",
}: ToggleProps) => {
  const [isOn, setIsOn] = useState(value);

  return (
    <div
      className={`toggle ${isOn ? "toggle--on" : ""} ${className}`}
      onClick={() => {
        setIsOn(!isOn);
        onClick ? onClick(isOn) : null;
      }}
    >
      <div className="toggle__knob">
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default Toggle;
