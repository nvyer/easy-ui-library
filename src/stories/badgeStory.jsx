import React from "react";
import Badge from "../components/badge/Badge";

const BadgeStory = () => {
  const defaultBadge = `<Badge color="#bf73ff" />`;
  const notificationBadge = ` <Badge color="#36badf" icon="notification" rotate={150} badgeContent={1000} />`;
  const chatBadge = `<Badge color="#58e1ab" icon="chat" badgeContent={3} />`;
  const wirelessBadge = `<Badge color="#ffa500" icon="wireless" badgeContent={1} rotate={20} />`;
  const accountBadge = ` <Badge color="#a9a2fa" icon="account" />`;
  const alerBadge = ` <Badge color="#FF0000" icon="alert" />`;
  const errorBadge = `<Badge onClick={() => console.log("error")} color="#FF7F7F" icon="error" />`;

  return (
    <div>
      <p style={{ fontWeight: 700 }}>
        Props:size(small,medium,large), rotate, color, icon, badgeContent,
        onClick
      </p>
      <div className="component-container">
        <p className="component-title">Default</p>
        <Badge color="#bf73ff" />
        <pre className="component-code">{defaultBadge}</pre>
      </div>
      <div className="component-container">
        <p className="component-title">Notification Icon</p>
        <Badge
          color="#36badf"
          icon="notification"
          rotate={150}
          badgeContent={1000}
        />
        <pre className="component-code">{notificationBadge}</pre>
      </div>
      <div className="component-container">
        <p className="component-title">Chat Icon</p>
        <Badge color="#58e1ab" icon="chat" badgeContent={3} />
        <pre className="component-code">{chatBadge}</pre>
      </div>
      <div className="component-container">
        <p className="component-title">Wireless Icon</p>
        <Badge color="#ffa500" icon="wireless" badgeContent={1} rotate={20} />
        <pre className="component-code">{wirelessBadge}</pre>
      </div>
      <div className="component-container">
        <p className="component-title">Account Icon</p>
        <Badge color="#a9a2fa" icon="account" />
        <pre className="component-code">{accountBadge}</pre>
      </div>
      <div className="component-container">
        <p className="component-title">Alert Icon</p>
        <Badge color="#FF0000" icon="alert" />
        <pre className="component-code">{alerBadge}</pre>
      </div>
      <div className="component-container">
        <p className="component-title">Error Icon</p>
        <Badge
          onClick={() => console.log("error")}
          color="#FF7F7F"
          icon="error"
        />
        <pre className="component-code">{errorBadge}</pre>
      </div>
    </div>
  );
};

export default BadgeStory;
