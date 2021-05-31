import "./App.css";
import Badge from "./components/badge/Badge";

function App() {
  return (
    <div className="app-wraper">
      <div className="temp-wraper">
        <Badge
          size={1}
          rotate={180}
          color={"grey"}
          icon={"email"}
          badgeContent={555}
        />
      </div>
      <div className="temp-wraper">
        <Badge
          size={2}
          rotate={180}
          color={"grey"}
          icon={"email"}
          badgeContent={5}
        />
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
      <div className="temp-wraper">
        <Badge
          size={3}
          rotate={180}
          color={"grey"}
          icon={"email"}
          badgeContent={1800}
        />
      </div>
      <div className="temp-wraper">
        <Badge
          size={3}
          rotate={180}
          color={"grey"}
          icon={"notification"}
          badgeContent={1800}
        />
      </div>
      <div className="temp-wraper">
        <Badge
          size={2}
          rotate={180}
          color={"grey"}
          icon={"chat"}
          badgeContent={400}
        />
      </div>
      <div className="temp-wraper">
        <Badge
          size={2}
          rotate={180}
          color={"grey"}
          icon={"toxic"}
          badgeContent={500}
        />
      </div>
      <div className="temp-wraper">
        <Badge
          size={1}
          rotate={180}
          color={"grey"}
          icon={"wireless"}
          badgeContent={500}
        />
      </div>
      <div className="temp-wraper">
        <Badge
          size={2}
          rotate={180}
          color={"grey"}
          icon={"wireless"}
          badgeContent={500}
        />
      </div>
      <div className="temp-wraper">
        <Badge
          size={2}
          rotate={180}
          color={"blue"}
          icon={"wireless"}
          badgeContent={500}
        />
      </div>
      <div className="temp-wraper">
        <Badge
          size={3}
          rotate={180}
          color={"grey"}
          icon={"wireless"}
          badgeContent={500}
        />
      </div>
      <div className="temp-wraper">
        <Badge
          size={2}
          rotate={180}
          color={"grey"}
          icon={"account"}
          badgeContent={500}
        />
      </div>
      <div className="temp-wraper">
        <Badge
          size={2}
          rotate={180}
          color={"lightblue"}
          icon={"account"}
          badgeContent={500}
        />
      </div>
      <div className="temp-wraper">
        <Badge
          size={3}
          rotate={180}
          color={"lightblue"}
          icon={"account"}
          badgeContent={500}
        />
      </div>
      <div className="temp-wraper">
        <Badge
          size={2}
          rotate={180}
          color={"lightblue"}
          icon={"alert"}
          badgeContent={500}
        />
      </div>
      <div className="temp-wraper">
        <Badge
          size={2}
          rotate={180}
          color={"grey"}
          icon={"alert"}
          badgeContent={500}
        />
      </div>
    </div>
  );
}

export default App;
