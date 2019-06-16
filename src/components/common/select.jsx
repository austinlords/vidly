import React from "react";

const Select = ({ options, label, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <select {...rest} className="custom-select">
        <option defaultValue disabled hidden />
        {options.map(option => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
