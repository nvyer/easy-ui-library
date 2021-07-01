import NativeSelect from "../components/Select/native-select";

const nativeSelectStory = () => {
    const primaryNativeSelect = `<NativeSelect>
    <option>Google</option>
    <option>FaceBook</option>
  </NativeSelect>`;

  const neutralNativeSelect = `<NativeSelect selectStyle="native--select--neutral">
  <option>Google</option>
  <option>FaceBook</option>
</NativeSelect>`;

  const darkNativeSelect = `<NativeSelect selectStyle="native--select--dark">
  <option>Google</option>
  <option>FaceBook</option>
</NativeSelect>`;

  const normalNativeSelect = `<NativeSelect selectStyle="native--select--normal">
  <option>Google</option>
  <option>FaceBook</option>
</NativeSelect>`;

  return (
    <>
      <h4>
        Props: onChange, disabled, selectStyle, placeholder, form, multiple,
        name
      </h4>
      <div className="component-container">
        <p className="component-title">Primary</p>
        <NativeSelect selectStyle="native--select--primary">
          <option>Google</option>
          <option>FaceBook</option>
        </NativeSelect>
        <pre className="component-code">{primaryNativeSelect}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Neutral</p>
        <NativeSelect selectStyle="native--select--neutral">
          <option>Google</option>
          <option>FaceBook</option>
        </NativeSelect>
        <pre className="component-code">{neutralNativeSelect}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Dark</p>
        <NativeSelect selectStyle="native--select--dark">
          <option>Google</option>
          <option>FaceBook</option>
        </NativeSelect>
        <pre className="component-code">{darkNativeSelect}</pre>
      </div>

      <div className="component-container">
        <p className="component-title">Normal</p>
        <NativeSelect selectStyle="native--select--normal">
          <option>Google</option>
          <option>FaceBook</option>
        </NativeSelect>
        <pre className="component-code">{normalNativeSelect}</pre>
      </div>
    </>
  );
}


export default nativeSelectStory;