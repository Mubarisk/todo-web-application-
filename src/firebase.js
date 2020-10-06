import * as firebase from 'firebase';
//import firebaseConfig from "./config";
require('firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseApp= firebase.initializeApp( {

  apiKey: "AIzaSyBNIxidevkoSyOzkW35GGMC9MBpPBC44Vw",
  authDomain: "todo-43606.firebaseapp.com",
  databaseURL: "https://todo-43606.firebaseio.com",
  projectId: "todo-43606",
  storageBucket: "todo-43606.appspot.com",
  messagingSenderId: "657357620128",
  appId: "1:657357620128:web:18929cf5c62296c412dac5",
  measurementId: "G-J9HCXEBE9P"
});

const db = firebaseApp.firestore();
export default db;
