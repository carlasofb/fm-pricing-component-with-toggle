import { FC, useState } from "react";
import { ToggleProps } from "./types";
import "./toggle.scss";

const Toggle: FC<ToggleProps> = ({ value, className = "" }: ToggleProps) => {
  const [isOn, setIsOn] = useState(value);

  return (
    <div
      className={`toggle ${isOn ? "toggle--on" : ""} ${className}`}
      onClick={() => setIsOn(!isOn)}
    >
      <div className="toggle__knob">
        <input type="checkbox" />
      </div>
    </div>
  );
};

export default Toggle;
