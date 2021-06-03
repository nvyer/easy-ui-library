import './App.css';
import Loader from "./components/loader";

function App() {
  return (
    <>
      <Loader size={"small"} />
      <Loader size={"medium"} />
      <Loader size={"large"} color={"#a8323e"} />
    </>
  );
}

export default App;
