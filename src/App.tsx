import "./App.css";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";

function App() {
  return (
    <div className="pricing">
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
    </div>
  );
}

export default App;
