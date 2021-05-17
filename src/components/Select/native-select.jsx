import "./native-select.css";
const STYLES = [
  "native--select--primary",
  "native--select--neutral",
  "native--select--dark",
  "native--select--normal",
];
export const NativeSelect = ({
  children,
  onChange,
  disabled,
  selectStyle,
  placeholder,
  autoFocus,
  form,
  multiple,
  name,
  required,
  size,
}) => {
  const checkSelectStyle = STYLES.includes(selectStyle)
    ? selectStyle
    : STYLES[0];
  return (
    <select
      className={`native--select ${checkSelectStyle}`}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      autoFocus={autoFocus}
      form={form}
      multiple={multiple}
      name={name}
      required={required}
      size={size}
    >
      {children}
    </select>
  );
};



