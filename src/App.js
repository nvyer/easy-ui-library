import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="flex-box">
      <Button buttonStyle={"btn--secondary--normal"} disabled>
        Hello world!
      </Button>
    </div>
  );
}

export default App;
