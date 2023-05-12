import React from "react";
import {IPasswordLength} from "../../data/IPasswordLength";
import {Grid, Slider} from "@mui/material";
import './PasswordLength.css'
const PasswordLength: React.FC<IPasswordLength> = ({ length, onLengthChange }) => {

  return (
      <Grid item xs={12} lg={6}>
        <Slider
          className="css-187mznn-MuiSlider-root"
          value={length}
          onChange={(e, value) => onLengthChange(value as number)}
          aria-labelledby="input-slider"
          valueLabelDisplay="auto"
          min={1}
          max={50}
        />
      </Grid>
  );
};

export default PasswordLength;
