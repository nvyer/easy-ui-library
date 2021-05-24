import "./App.css";
import TextFieldInput from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <TextFieldInput label="Standard" />
      <TextFieldInput label="Filled" variant="filled" />
      <TextFieldInput label="outlined" variant="outlined" />
      <TextFieldInput
        label="required field"
        variant="outlined"
        required={true}
      />
      <TextFieldInput label="disabled" variant="outlined" disabled />
      <TextFieldInput label="password" variant="outlined" type="password" />
      <TextFieldInput label="searchfield" variant="outlined" type="search" />
      <TextFieldInput label="Number" variant="outlined" type="number" />
      <TextFieldInput
        label="READ only"
        variant="outlined"
        type="text"
        readonly="readonly"
        defaultValue="Read only"
      />
      <TextFieldInput
        label="READ only"
        variant="outlined"
        type="text"
        readOnly="readonly"
        defaultValue="Read only with helperText"
        helperText="some helper text some helper text"
      />
    </div>
  );
}

export default App;
