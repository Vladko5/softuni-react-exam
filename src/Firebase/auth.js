import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/database'


var firebaseConfig = {
    apiKey: "AIzaSyCH0CKWeAVnRgssTKjKuH2b8V3pURU3fbU",
    authDomain: "vets-for-pets-80140.firebaseapp.com",
    projectId: "vets-for-pets-80140",
    storageBucket: "vets-for-pets-80140.appspot.com",
    messagingSenderId: "323929780111",
    appId: "1:323929780111:web:0106404934b1b735faa5fa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let auth = firebase.auth()
  let db = firebase.firestore()
  let realtimeDB = firebase.database();

  export {auth ,db,realtimeDB}