import React, {useState} from "react";
import PasswordLength from "../PasswordLength/PasswordLength";
import GenerateButton from "../GenerateButton/GenerateButton";
import PasswordDisplay from "../PasswordDisplay/PasswordDisplay";
import Checkbox from "../Checkbox/Checkbox";
import './PasswordGenerator.css'
import CopyButton from "../CopyButton/CopyButton";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);
  const [checkedUppercase, setCheckedUppercase] = useState(false);
  const [checkedLowercase, setCheckedLowercase] = useState(false);
  const [checkedNumbers, setCheckedNumbers] = useState(false);
  const [checkedSymbols, setCheckedSymbols] = useState(false);

  const generatePassword = () => {
    let charset = "";
    if (checkedUppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (checkedLowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (checkedNumbers) {
      charset += "0123456789";
    }
    if (checkedSymbols) {
      charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(password);
  };

  const handleLengthChange = (value: number) => {
    setLength(value);
  };

  const handleCheckedUppercaseChange = () => {
    setCheckedUppercase(!checkedUppercase);
  };

  const handleCheckedLowercaseChange = () => {
    setCheckedLowercase(!checkedLowercase);
  };

  const handleCheckedNumbersChange = () => {
    setCheckedNumbers(!checkedNumbers);
  };

  const handleCheckedSymbolsChange = () => {
    setCheckedSymbols(!checkedSymbols);
  };


  return (
    <div className="cards">
      <h1>Password Generator</h1>
      <PasswordLength length={length} onLengthChange={handleLengthChange} />
    <div className="checkbox">
      <Checkbox label="Include Uppercase Letter" checked={checkedUppercase} onCheckChange={handleCheckedUppercaseChange} />
      <Checkbox label="Include Numbers" checked={checkedLowercase} onCheckChange={handleCheckedLowercaseChange} />
    </div>
      <div className="checkbox-two">
      <Checkbox label="Include Lowercase Letter"  checked={checkedNumbers} onCheckChange={handleCheckedNumbersChange} />
      <Checkbox label="Include Symbols" className="includeNumbers" checked={checkedSymbols} onCheckChange={handleCheckedSymbolsChange} />
      </div>
      <PasswordDisplay password={password} />
      <div className="button">
      <GenerateButton onClick={generatePassword} />
      <CopyButton text={password} />
      </div>
    </div>
  );
};

export default PasswordGenerator;
