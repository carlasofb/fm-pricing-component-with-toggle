import "./App.css";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import Heading from "./components/Heading/Heading";
import Toggle from "./components/Toggle/Toggle";
import PlanCard from "./components/PlanCard/PlanCard";
import { useState } from "react";

function App() {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <div className="app-wrapper">
      <Button style="primary">LEARN MORE</Button>
      <br />
      <br />
      <Button style="secondary">LEARN MORE</Button>
      <br />
      <br />
      <Text type="p" style="normal">
        Annually
      </Text>
      <br />
      <Text type="p" style="tinted">
        Monthly
      </Text>
      <br />
      <Heading level="h1" style="normal">
        199.99
      </Heading>
      <br />
      <Heading level="h2" style="tinted">
        Our Pricing
      </Heading>
      <br />
      <Toggle value={false} onClick={() => setIsMonthly(!isMonthly)} />
      <br />
      <Toggle value={true} onClick={() => setIsMonthly(!isMonthly)} />
      <br />
      <br />
      <PlanCard
        style={"white"}
        name={{ type: "p", style: "normal", children: "Basic" }}
        isMonthly={isMonthly}
        price={{
          level: "h1",
          style: "normal",
          children: { monthly: "19.99", annual: "199.99" },
        }}
        features={[
          { type: "p", style: "normal", children: "500 GB Storage" },
          { type: "p", style: "normal", children: "2 Users Allowed" },
          { type: "p", style: "normal", children: "Send up to 3 GB" },
        ]}
        button={{ style: "primary", children: "LEARN MORE" }}
      />
      <br />
      <PlanCard
        style={"purple"}
        name={{ type: "p", style: "normal", children: "Professional" }}
        isMonthly={isMonthly}
        price={{
          level: "h1",
          style: "normal",
          children: { monthly: "24.99", annual: "249.99" },
        }}
        features={[
          { type: "p", style: "normal", children: "1 TB Storage" },
          { type: "p", style: "normal", children: "5 Users Allowed" },
          { type: "p", style: "normal", children: "Send up to 10 GB" },
        ]}
        button={{ style: "secondary", children: "LEARN MORE" }}
      />
    </div>
  );
}

export default App;
