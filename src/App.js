import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="flex-box">
      <Button buttonStyle={"btn--primary--normal"}>Hello world!</Button>
      <Button buttonStyle={"btn--primary--destructive"}>Hello world!</Button>
      <Button buttonStyle={"btn--secondary--normal"}>Hello world!</Button>
      <Button buttonStyle={"btn--secondary--destructive"}>Hello world!</Button>
      <Button buttonStyle={"btn--subtle--normal"}>Hello world!</Button>
      <Button buttonStyle={"btn--subtle--destructive"}>Hello world!</Button>
      <Button buttonStyle={"btn--primary--normal"} isLoading={true}>hello world</Button>
      <Button buttonStyle={"btn--primary--destructive"} isLoading={true}>hello world</Button>
      <Button buttonStyle={"btn--secondary--normal"} isLoading={true}>hello world</Button>
      <Button buttonStyle={"btn--secondary--destructive"} isLoading={true}>hello world</Button>
      <Button buttonStyle={"btn--subtle--normal"} isLoading={true}>hello world</Button>
      <Button buttonStyle={"btn--subtle--destructive"} isLoading={true}>hello world</Button>

    </div>
  );
}

export default App;
