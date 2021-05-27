import Icon from "@mdi/react";
import { mdiEmail } from "@mdi/js";

const Badge = ({ size, rotate, color, icon, badgeContent }) => {
  let iconType;
  switch (icon) {
    case "email":
      iconType = mdiEmail;
      break;

    default:
      break;
  }

  return (
    <div>
      <Icon
        path={iconType}
        size={size}
        horizontal
        vertical
        rotate={rotate}
        color={color}
      />
      <span>{badgeContent ? badgeContent : 0}</span>
    </div>
  );
};

export default Badge;
