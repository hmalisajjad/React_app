import React, { useState, useEffect } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import database from "./firebase";
// import { serverTimestamp } from "firebase/compat/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

function App() {
  const [todos, setTodos] = useState([""]);
  const [text, setText] = useState("");

  var day = new Date();
  var dateTime =
    day.getDate() +
    "-" +
    (day.getMonth() + 1) +
    "-" +
    day.getFullYear() +
    "  " +
    day.getHours() +
    ":" +
    day.getMinutes();

  useEffect(() => {
    database
      .collection("DataApp")
      .orderBy("SERVERTIMESTAMP", "desc")
      .onSnapshot(function(querySnapshot) {
        setTodos(
          querySnapshot.docs.map((doc) => ({
            keyFirebase: doc.id,
            dataFirebase: doc.data().TODO,
            timeFirebase: doc.data().TIME,
          }))
        );
      });
  });

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

  const updateText = (keyFirebase) => {
    const updateData = prompt("Enter New Data ");
    if (updateData) {
      database
        .collection("DataApp")
        .doc(keyFirebase)
        .update({
          TODO: updateData,
          TIME: dateTime,
          SERVERTIMESTAMP: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          setText("");
          alert("Data updated");
        })
        .catch((error) => {
          alert("Error! Please Check your enter Data", error.message);
        });
    }

    const deleteText = (keyFirebase) => {
      database
        .collection("DataApp")
        .doc(keyFirebase)
        .delete()
        .then(() => {
          alert("Data deleted");
        })
        .catch((error) => {
          alert("Error! Please Check your enter Data", error.message);
        });
    };

    const deleteAllText = (i) => {
      if (deleteAllText) {
        alert("Do you want to Delete All?");
        database
          .collection("DataApp")
          .get()
          .then((res) => {
            res.forEach((element) => {
              element.ref.delete();
            });
            alert("All data is deleted");
          })
          .catch((error) => {
            alert("Error! No Data Found", error.message);
          });
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
                {i + 1}. {data.dataFirebase}
              </p>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => updateText(data.keyFirebase)}
                >
                  UPDATE
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => deleteText(data.keyFirebase)}
                >
                  DELETE
                </Button>
              </div>
              <span>{data.timeFirebase}</span>
            </Paper>
          );
        })}
      </div>
    );
  };
}

export default App;
