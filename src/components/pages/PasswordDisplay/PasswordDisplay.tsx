import React from "react";
import {IPasswordDisplay} from "../../data/IPasswordDisplay";
import './PasswordDisplay.css'
import {Grid, TextField} from "@mui/material";
const PasswordDisplay: React.FC<IPasswordDisplay> = ({ password }) => {
  return(
    <div className="password-wrapper">
      <Grid item xs={12} lg={6}>
        <TextField
          id="outlined"
          label="Password"
          variant="outlined"
          value={password}
          disabled
        />
      </Grid>
    </div>
)
};

export default PasswordDisplay;
