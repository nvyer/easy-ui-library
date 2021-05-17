import React, { Fragment, useState } from "react";
import "./select.css";

export const Select = ({
  children,
  placeholder,
  value,
  onChange,
  id,
  multypleType,
}) => {
  const [isBlock, setIsBlock] = useState(false);
  const [selectValue, setSelectValue] = useState([]);
  const [clicked, setClicked] = useState(false);

  const openOptions = () => {
    !isBlock ? setIsBlock(true) : setIsBlock(false);
  };
  const changeSelectValue = (event) => {
    setClicked(true);
    if (multypleType) {
      const value = checkMultypleOptions(event);
      selectValue.some((el) => el.value === event.target.innerText)
        ? setSelectValue((prevState) => [
            ...prevState.filter((el) => el.value !== event.target.innerText),
          ])
        : setSelectValue((prevState) => [
            ...prevState,
            { value: event.target.innerText, selected: true },
          ]);

      onChange !== undefined && onChange(value);
    } else {
      checkOneOption(event);
      onChange !== undefined && onChange(event.target.innerText);
    }
  };
  const checkOneOption = ({ target: { innerText } }) => {
    if (selectValue.some((el) => el.value === innerText)) {
      setSelectValue([]);
      setClicked(false);
    } else {
      setSelectValue([{ value: innerText, selected: true }]);
    }
  };

  const checkMultypleOptions = ({ target: { innerText } }) => {
    if (selectValue.some((el) => el.value === innerText)) {
      return [...selectValue.filter((el) => el.value !== innerText)];
    } else {
      return [...selectValue, { value: innerText, selected: true }];
    }
  };
  const handleBlur = () => {
    setIsBlock(false);
    if (!clicked) {
      setSelectValue([]);
    }
    if (selectValue.length === 0) {
      setClicked(false);
    }
  };

  const isItemInSelection = (item) => {
    if (selectValue.some((current) => current.value === item.props.children)) {
      return true;
    }
    return false;
  };

  const renderSelectComponent = (elem) => {
    return elem.map((el) => {
      if (!Array.isArray(el.props.children)) {
        return (
          <div
            className={
              selectValue.some((el) => el.selected) && isItemInSelection(el)
                ? "selected"
                : ""
            }
            key={el.props.id}
            onClick={changeSelectValue}
          >
            {el}
          </div>
        );
      } else {
        return (
          <Fragment key={el.props.id}>
            <b className="option-title--primary">{el.props.title}</b>
            {el.props.children.map((elem) => (
              <div
                className={
                  selectValue.some((el) => el.selected) &&
                  isItemInSelection(elem)
                    ? "selected"
                    : ""
                }
                onClick={changeSelectValue}
                key={elem.props.id}
              >
                {elem}
              </div>
            ))}
          </Fragment>
        );
      }
    });
  };

  const multypleTitle = (item) => {
    switch (multypleType) {
      case "block":
        return (
          <div className="multyple-titles">
            {item.map((el, idx) => (
              <div className="multyple-title-block" key={idx}>
                {el.value}
              </div>
            ))}
          </div>
        );
      case "list":
        return (
          <div className="multyple-titles">
            {item.map((el, idx) => {
              if (item.length === 1 || idx === item.length - 1) {
                return (
                  <div key={idx} className="multiple-title-list">
                    {el.value}
                  </div>
                );
              } else {
                return (
                  <div key={idx} className="multiple-title-list">
                    {el.value} {","}
                  </div>
                );
              }
            })}
          </div>
        );
    }
  };

  return (
    <div value={value} id={id}>
      <div className="select--primary" tabIndex="0" onBlur={handleBlur}>
        <>
          {clicked && <p className="placeholder">{placeholder}</p>}
          <div className={"select-title--primary"} onClick={openOptions}>
            {clicked
              ? multypleType
                ? multypleTitle(selectValue)
                : selectValue.map((el) => el.value)
              : placeholder}
            <span className="arrow-down"></span>
          </div>
        </>
        <div className="options--primary">
          {isBlock && renderSelectComponent(children)}
        </div>
      </div>
    </div>
  );
};

export const Option = ({ children, id }) => {
  return (
    <div id={id} className="option--primary">
      {children}
    </div>
  );
};

export const GroupOptions = ({ children, title, id }) => {
  return (
    <div title={title} id={id}>
      {children}
    </div>
  );
};
