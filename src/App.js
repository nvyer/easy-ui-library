import "./App.css";
import Badge from "./components/badge/Badge";

function App() {
  return (
    <div className="app-wraper">
      <div className="temp-wraper">
        <Badge size={1} rotate={180} color={"grey"} icon={"email"} />
      </div>
      <div className="temp-wraper">
        <Badge size={2} rotate={180} color={"grey"} icon={"email"} />
      </div>
      <div className="temp-wraper">
        <Badge
          size={3}
          rotate={180}
          color={"grey"}
          icon={"email"}
          badgeContent={800}
        />
      </div>
    </div>
  );
}

export default App;
