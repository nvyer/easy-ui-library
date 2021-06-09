import React, { useState } from "react";

import "./tag.css";

const colorTypes = {
    primary: "#1DD4CE",
    secondary: " #2C3E50"
};

const Tag = ({ placeholder, type }) => {
    const [tags, setTags] = useState([]);

    const handleRemove = (idx) => { // useCallback
        const newTags = [...tags];
        newTags.splice(idx, 1);

        setTags([...newTags]);
    };

    const handleKeyDown = (e) => {
        const inputValue = e.target.value.trim();

        if (e.key === "Enter" && inputValue) {
            if (!tags.find((el) => el.toLowerCase() === inputValue.toLowerCase())) {
                setTags([...tags, inputValue]);
            }
            e.target.value = null;
        } else if (e.key === "Backspace" && !inputValue) {
            handleRemove(tags.length - 1);
        }
    };

    return (
        <div className="tag-input-container">
            <ul className="ul-input">
                {tags.map((el, idx) => (
                    <li
                        key={idx}
                        className="li-tags"
                        style={{
                            backgroundColor: `${colorTypes[type]}`,
                        }}
                    >
                        {el}
                        <button onClick={() => handleRemove(idx)} className="remove-btn">
                            x
              </button>
                    </li>
                ))}
                <li className="tag-input-li-container">
                    <input
                        type="text"
                        onKeyDown={handleKeyDown}
                        className="tag-input"
                        placeholder={placeholder}
                    />
                </li>
            </ul>
        </div>
    );
};


Tag.defaultProps = {
    color: "primary",
    placeholder: "Type here ..."
};

export default Tag;

