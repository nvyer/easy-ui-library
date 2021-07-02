import { useEffect, useRef, useState } from "react";
import "./dropdown.css";
import icon from "./down-arrow-2_icon-icons.com_70191.png";

let contentStyle = "";
let contentItemStyle = "";
let titleStyle = "";

export const DropDown = ({
  children,
  dropDownTitle,
  dropDownStyle,
  search,
}) => {
  const [isBloc, setIsBloc] = useState(false);
  const [contentItems, setContentItems] = useState(children);
  const ref = useRef(null);

  const hideShowDropDown = () => {
    !isBloc ? setIsBloc(true) : setIsBloc(false);
  };

  const handleBlur = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsBloc(false);
    }
  };
  const renderContent = (item) => {
    return item.map((el) => {
      return (
        <a
          href={el.props.href}
          className={`${contentItemStyle}`}
          key={el.props.id}
        >
          {el.props.children}
        </a>
      );
    });
  };
  useEffect(() => {
    document.addEventListener("click", handleBlur, true);
    return () => {
      document.removeEventListener("click", handleBlur, true);
    };
  }, []);
  const searchContentItem = ({ target: { value } }) => {
    let filteredContent = contentItems.filter((el) => {
      return el.props.children.toLowerCase().search(value.toLowerCase()) !== -1;
    });
    setContentItems(filteredContent);
    if (value.length === 0) {
      setContentItems(children);
    }
  };
  switch (dropDownStyle) {
    case "dropdown--primary":
      contentItemStyle = "dropdown--primary--content-item";
      contentStyle = "dropdown--primary--content";
      titleStyle = "dropdown--primary--title";
      break;
    case "dropdown--destructive":
      contentItemStyle = "dropdown--destructive--content-item";
      contentStyle = "dropdown--destructive--content";
      titleStyle = "dropdown--destructive--title";
      break;
    case "dropdown--neutral":
      contentItemStyle = "dropdown--neutral--content-item";
      contentStyle = "dropdown--neutral--content";
      titleStyle = "dropdown--neutral--title";
      break;
    default:
      contentItemStyle = "dropdown--primary--content-item";
      contentStyle = "dropdown--primary--content";
      titleStyle = "dropdown--primary--title";
  }

  return (
    <div
      onClick={hideShowDropDown}
      ref={ref}
      className={`dropdown ${dropDownStyle}`}
    >
      <div className={`${titleStyle}`}>
        {search ? (
          <input
            placeholder={dropDownTitle}
            className="search-dropdown"
            onChange={(e) => searchContentItem(e)}
          />
        ) : (
          <div className="dropdown-title">{dropDownTitle}</div>
        )}
        {search ? (
          <img src={icon} className="drop-down-icon" />
        ) : (
          <img src={icon} className="drop-down-icon" />
        )}
      </div>
      <div className={`${contentStyle}`} onBlur={handleBlur}>
        {isBloc && renderContent(contentItems)}
      </div>
    </div>
  );
};
