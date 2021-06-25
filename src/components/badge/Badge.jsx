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
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const iconTypes = {
  email: mdiEmail,
  notification: mdiBell,
  chat: mdiChatProcessing,
  toxic: mdiBiohazard,
  wireless: mdiAccessPoint,
  account: mdiAccountCircle,
  alert: mdiAlert,
  error: mdiAlertCircle,
};

const badgeSizes = {
  small: 1,
  medium: 2,
  large: 3,
};

const getIcon = (icon) => `${iconTypes[icon]}`;

const Badge = ({ size, rotate, color, icon, badgeContent, onClick }) => {
  const content = useRef(badgeContent);
  useEffect(() => {
    if (badgeContent > 999) {
      content.current = "+999";
    }
  }, [content]);

  return (
    <div>
      <button className="badge-container" onClick={onClick}>
        <Icon
          path={getIcon(icon)}
          size={badgeSizes[size]}
          horizontal
          vertical
          rotate={rotate}
          color={color}
        />
        <span className={`badge-number--${size}`}>
          {badgeContent && content.current}
        </span>
      </button>
    </div>
  );
};

Badge.defaultProps = {
  size: "medium",
  rotate: 180,
  icon: "email",
};

Badge.propTypes = {
  badgeContent: PropTypes.number,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Badge;
