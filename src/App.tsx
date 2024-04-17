import "./App.css";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import Heading from "./components/Heading/Heading";
import Toggle from "./components/Toggle/Toggle";

function App() {
  return (
    <div className="app-wrapper">
      <Button>LEARN MORE</Button>
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
      <Toggle value={false} />
      <br />
      <Toggle value={true} />
    </div>
  );
}

export default App;
