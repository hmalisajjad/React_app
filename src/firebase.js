import firebase from "firebase/app";
import "firebase/firestore";

var fireApi = firebase.initializeApp({
  apiKey: "AIzaSyCOPz4SIDCH88sj2k3BXn5Tm2vRUJqVdBE",
  authDomain: "data-entry-app-react.firebaseapp.com",
  projectId: "data-entry-app-react",
  storageBucket: "data-entry-app-react.appspot.com",
  messagingSenderId: "112662675231",
  appId: "1:112662675231:web:424f911b596387ab1c7a2a",
  measurementId: "G-JRFVVVG94K",
});

var database = fireApi.firestore();
export default database;
