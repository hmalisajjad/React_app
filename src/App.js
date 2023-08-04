import React from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="center">
      <h1>Form </h1> <br />
      <TextField id="credientials" label="Email" /> <br />
      <TextField id="credientials" label="Password" /> <br />
      <Button variant="contained" color="secondary">
        Form Submit
      </Button>
    </div>
  );
}

export default App;
