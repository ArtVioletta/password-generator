import React from "react";
import './GenerateButton.css';
import {IGenerateButton} from "../../data/IGenerateButton";

const GenerateButton: React.FC<IGenerateButton> = ({ onClick }) => {
  return(
  <button  onClick={onClick}>
    Generate Password
    {/*<SyncIcon/>*/}
  </button>
  )
};

export default GenerateButton;

