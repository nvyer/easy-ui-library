import "./App.css";
import TextFieldInput from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <TextFieldInput label="Standard" />
      <TextFieldInput label="Filled" variant="filled" />
      <TextFieldInput label="outlined" variant="outlined" />
    </div>
  );
}

export default App;
