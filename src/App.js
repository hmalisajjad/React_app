import React, { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function App() {
  const [todos, setTodos] = useState(["testing", "testing2"]);
  const [text, setText] = useState("");

  const addText = (e) => {
    e.preventDefault();
    setTodos([...todos, text]);
    setText("");
  };

  const updateText = (i) => {
    const updateData = prompt("Enter New Data", todos[i]);
    if (updateData) {
      todos[i] = updateData;
      setTodos([...todos]);
      console.log(todos);
    } else {
      alert("As you wish!");
    }
  };

  const deleteText = (i) => {
    todos.splice(i, 1);
    setTodos([...todos]);
  };

  const deleteAllText = (i) => {
    if (deleteAllText) {
      alert("Do you want to Delete All?");
      setTodos([]);
    } else {
      alert("As you wish!");
    }
  };

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
            disabled={!text}
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
          <Paper elevation={4} className="dataRendering">
            <p>
              {i + 1}. {data}
            </p>
            <div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={() => updateText(i)}
              >
                UPDATE
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => deleteText(i)}
              >
                DELETE
              </Button>
            </div>
          </Paper>
        );
      })}
    </div>
  );
}

export default App;
