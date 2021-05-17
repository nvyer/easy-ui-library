import "./App.css";
import TextFieldInput from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <TextFieldInput label="Standard" />
      <TextFieldInput label="Filled" variant="filled" />
    </div>
  );
}

export default App;
