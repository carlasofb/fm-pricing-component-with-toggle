import "./pricing.scss";
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
      <div className="pricing__plans">
        <PlanCard
          style={"white"}
          name={{ type: "p", style: "normal", children: "Basic" }}
          price={{ level: "h1", style: "normal", children: "199.99" }}
          features={[
            { type: "p", style: "normal", children: "500 GB Storage" },
            { type: "p", style: "normal", children: "2 Users Allowed" },
            { type: "p", style: "normal", children: "Send up to 3 GB" },
          ]}
          button={{ style: "primary", children: "LEARN MORE" }}
        />
        <PlanCard
          style={"purple"}
          name={{ type: "p", style: "normal", children: "Professional" }}
          price={{ level: "h1", style: "normal", children: "249.99" }}
          features={[
            { type: "p", style: "normal", children: "1 TB Storage" },
            { type: "p", style: "normal", children: "5 Users Allowed" },
            { type: "p", style: "normal", children: "Send up to 10 GB" },
          ]}
          button={{ style: "secondary", children: "LEARN MORE" }}
        />
        <PlanCard
          style={"white"}
          name={{ type: "p", style: "normal", children: "Master" }}
          price={{ level: "h1", style: "normal", children: "399.99" }}
          features={[
            { type: "p", style: "normal", children: "2 TB Storage" },
            { type: "p", style: "normal", children: "10 Users Allowed" },
            { type: "p", style: "normal", children: "Send up to 20 GB" },
          ]}
          button={{ style: "primary", children: "LEARN MORE" }}
        />
      </div>
    </div>
  );
}

export default Pricing;
