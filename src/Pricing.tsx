import "./pricing.scss";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import Heading from "./components/Heading/Heading";
import Toggle from "./components/Toggle/Toggle";
import PlanCard from "./components/PlanCard/PlanCard";

function Pricing() {
  return (
    <div className="pricing">
      <Heading level="h2" style="tinted">
        Our Pricing
      </Heading>
      <div className="toggle-switch__wrapper">
        <Text type="p" style="tinted">
          Annually
        </Text>
        <Toggle value={false} />
        <Text type="p" style="tinted">
          Monthly
        </Text>
      </div>
    </div>
  );
}

export default Pricing;
