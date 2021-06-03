import Icon from "@mdi/react";
import {
  mdiEmail,
  mdiBell,
  mdiChatProcessing,
  mdiBiohazard,
  mdiAccessPoint,
  mdiAccountCircle,
  mdiAlert,
  mdiAlertCircle,
} from "@mdi/js";
import "./Badge.css";

const Badge = ({ size, rotate, color, icon, badgeContent, onClick }) => {
  let iconType, badgeSize;
  switch (icon) {
    case "email":
      iconType = mdiEmail;
      break;

    case "notification":
      iconType = mdiBell;
      break;

    case "chat":
      iconType = mdiChatProcessing;
      break;

    case "toxic":
      iconType = mdiBiohazard;
      break;
    case "wireless":
      iconType = mdiAccessPoint;
      break;
    case "account":
      iconType = mdiAccountCircle;
      break;
    case "alert":
      iconType = mdiAlert;
      break;
    case "error":
      iconType = mdiAlertCircle;
      break;
    default:
      break;
  }

  switch (size) {
    case 1:
      badgeSize = "badge-number--small";
      break;

    case 2:
      badgeSize = "badge-number--medium";
      break;
    case 3:
      badgeSize = "badge-number--large";
      break;

    default:
      break;
  }

  if (badgeContent > 999) {
    badgeContent = "+999";
  }

  return (
    <div>
      <button className="badge-container" onClick={onClick}>
        <Icon
          path={iconType}
          size={size}
          horizontal
          vertical
          rotate={rotate}
          color={color}
        />
        <span className={badgeSize}>{badgeContent ? badgeContent : ""}</span>
      </button>
    </div>
  );
};

export default Badge;
