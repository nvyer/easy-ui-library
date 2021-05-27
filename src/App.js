import "./App.css";
import Badge from "./components/badge/Badge";

function App() {
  return (
    <div className="app-wraper">
      <Badge size={1} rotate={180} color={"blue"} icon={"email"} />
      <Badge size={2} rotate={180} color={"blue"} icon={"email"} />
      <Badge
        size={3}
        rotate={180}
        color={"blue"}
        icon={"email"}
        badgeContent={52}
      />
    </div>
  );
}

export default App;
