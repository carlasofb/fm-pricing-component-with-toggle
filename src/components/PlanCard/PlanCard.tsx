import { FC } from "react";
import { PlanCardProps } from "./types";
import "./plan_card.scss";
import Text from "../Text/Text";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

const PlanCard: FC<PlanCardProps> = ({
  style,
  name,
  price,
  features,
  button,
  className = "",
}: PlanCardProps) => {
  return (
    <div className={`plan-card plan-card--${style} ${className}`}>
      <Text {...name} />
      <Heading {...price} className="plan-card__price" />
      <table className="plan-card__features">
        <tbody>
          {features.map((feature, index) => {
            return (
              <tr key={index}>
                <td>
                  <Text {...feature} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button {...button} />
    </div>
  );
};

export default PlanCard;
