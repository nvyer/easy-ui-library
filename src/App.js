import "./App.css";
import { GroupOptions, Option, Select } from "./components/Select/select";
import { NativeSelect} from "./components/Select/native-select"

function App() {
  return (
    <div>
      <h3>Primary</h3>
      <NativeSelect selectStyle={"native--select--primary"} name="Countries">
        <option value="" disabled selected>
          Choose country...
        </option>
        <option value="armenia">Armenia</option>
        <option value="russia">Russia</option>
        <option value="england">England</option>
      </NativeSelect>
      <h3>Neutral</h3>
      <NativeSelect selectStyle={"native--select--neutral"}>
        <option value="armenia">Armenia</option>
        <option value="russia">Russia</option>
        <option value="england">England</option>
      </NativeSelect>
      <h3>Dark</h3>
      <NativeSelect selectStyle={"native--select--dark"}>
        <option value="armenia">Armenia</option>
        <option value="russia">Russia</option>
        <option value="england">England</option>
      </NativeSelect>
      <h3>Normal</h3>
      <NativeSelect selectStyle={"native--select--normal"}>
        <option value="armenia">Armenia</option>
        <option value="russia">Russia</option>
        <option value="england">England</option>
      </NativeSelect>
      <h3>Option Group</h3>
      <NativeSelect>
        <optgroup label="Country">
          <option value="armenia">Armenia</option>
        <option value="russia">Russia</option>
        <option value="england">England</option>
        </optgroup>
        <optgroup label="City">
          <option>Yerevan</option>
          <option>New York</option>
        </optgroup>
      </NativeSelect>
      <h3>Group Select</h3>
         <Select placeholder="Choose Country..."  onChange={(value) => console.log(value)} >
        <GroupOptions title="Country" id="1">
          <Option id="1">Armenia</Option>
          <Option id="2">USA</Option>
          <Option id="3">France</Option>
          <Option id="4">England</Option>
        </GroupOptions>
        <GroupOptions title="City" id="2">
          <Option id="3">Yerevan</Option>
          <Option id="4">New York</Option>
          <Option id="5">Paris</Option>
          <Option id="6">London</Option>
        </GroupOptions>
      </Select>
      <h3>Select</h3>
      <Select placeholder="Choose Country..."  multypleType="block" onChange={(value) => console.log(value)}>
        <Option id="1">Armenia</Option>
        <Option id="2">USA</Option>
        <Option id="3">France</Option>
        <Option id="4">Russia</Option>
      </Select>
    </div>
  );
}
export default App;
