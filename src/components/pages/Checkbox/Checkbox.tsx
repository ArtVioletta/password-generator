import React from "react";
import {ICheckboxProps} from "../../data/ICheckboxProps";
import './Checkbox.css'
const Checkbox: React.FC<ICheckboxProps> = ({ label, checked, onCheckChange, className}) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onCheckChange} />
      {label}
    </label>
  );
};

export default Checkbox;
