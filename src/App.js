import React, { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function App() {
  const [todos, setTodos] = useState(["testing"]);
  const [text, setText] = useState("");

  const addText = () => {};

  const updateText = () => {};

  const deleteText = () => {};

  const deleteAllText = () => {};

  return (
    <div>
      <h1 className="header">DATA APP</h1>
      <form>
        <Paper elevation={5} className="form">
          <TextField
            className="textField"
            label="enterData"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={addText}
          >
            ADD
          </Button>
          <Button variant="contained" color="primary" onClick={deleteAllText}>
            DELETE ALL
          </Button>
        </Paper>
      </form>
      {todos.map((data, i) => {
        return (
          <p>
            {i + 1}. {data}
          </p>
        );
      })}
    </div>
  );
}

export default App;
