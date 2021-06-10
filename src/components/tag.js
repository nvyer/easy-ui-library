import React, { useCallback, useState } from "react";

import "./tag.css";

const types = {
    primary: "#1DD4CE",
    secondary: " #2C3E50"
};

const Tag = ({ className, placeholder, type }) => {
    const [tags, setTags] = useState([]);

    const handleRemove = useCallback((idx) => {
        const newTags = [...tags];
        newTags.splice(idx, 1);

        setTags([...newTags]);
    }, [tags]);

    const handleKeyDown = useCallback((e) => {
        const inputValue = e.target.value.trim();

        if (e.key === "Enter" && inputValue) {
            if (!tags.find((el) => el.toLowerCase() === inputValue.toLowerCase())) {
                setTags([...tags, inputValue]);
            }
            e.target.value = null;
        } else if (e.key === "Backspace" && !inputValue) {
            handleRemove(tags.length - 1);
        }
    }, [tags, handleRemove]);

    return (
        <div className={className ? className : "tag-input-container"}>
            <ul className="ul-input">
                {tags.map((el, idx) => (
                    <li
                        key={idx}
                        className="li-tags"
                        style={{
                            backgroundColor: `${types[type]}`,
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
        </div >
    );
};


Tag.defaultProps = {
    type: "primary",
    placeholder: "Type here ..."
};

export default Tag;

