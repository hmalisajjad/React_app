import React, { useState, useEffect } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import database from "./firebase";
import { serverTimestamp } from "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function App() {
  const [todos, setTodos] = useState(["testing", "testing2"]);
  const [text, setText] = useState("");

  var day = new Date();
  var dateTime =
    day.getDate +
    "-" +
    (day.getMonth() + 1) +
    "-" +
    day.getFullYear() +
    "" +
    day.getHours() +
    ":" +
    day.getMinutes();

  const addText = (e) => {
    e.preventDefault();
    database
      .collection("DataApp")
      .add({
        TODO: text,
        TIME: dateTime,
        SERVERTIMESTAMP: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setText("");
        alert("Data Added");
      })
      .catch((error) => {
        alert("Error! Please Check your enter Data", error.message);
      });
  };

  const updateText = (i) => {
    const updateData = prompt("Enter New Data ", todos[i]);
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
            label="Please Enter Your Data"
            value={text}
            onChange={(e) => setText(e.target.value)}
            InputProps={{ maxlength: 55 }}
          />
          <br />
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
          <Paper elevation={5} className="dataRendering">
            <p>
              {i + 1}. {data}
            </p>
            <div>
              <Button
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
            <span>time</span>
          </Paper>
        );
      })}
    </div>
  );
}

export default App;
