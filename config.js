import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyAli337ZzorvnxktEy0nzO42aLTEgfTqcM",
  authDomain: "carracing-1b77d.firebaseapp.com",
  databaseURL: "https://carracing-1b77d-default-rtdb.firebaseio.com",
  projectId: "carracing-1b77d",
  storageBucket: "carracing-1b77d.appspot.com",
  messagingSenderId: "821262074152",
  appId: "1:821262074152:web:5a4bf3c658bdf5cff0d01d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();