
import React from 'react';

const RadioButton = ({
    name,
    text,
    radioValue,
    handleChange,
    isChecked
}) => {
    const radioId = 'selectType' + text;
    const checked = isChecked ? 'checked' : '';
    return (
        <p className="input-group input-group--radio radioButton">
            <input
                onChange={handleChange.bind(null, radioValue)}
                className="input-group__input input-group__input--radio"
                value={radioValue}
                type="radio"
                name={name}
                id={radioId}
                defaultChecked={isChecked} />
            <label
                className="input-group__label input-group__label--radio"
                htmlFor={radioId}>{text}</label>
        </p>
    );
};

export default RadioButton;