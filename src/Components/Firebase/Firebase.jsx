import firebase from "firebase";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: "coding-tee.firebaseapp.com",
    projectId: "coding-tee",
    storageBucket: "coding-tee.appspot.com",
    messagingSenderId: "688233420079",
    appId: "1:688233420079:web:696452728dfb9913e0bdda",
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;