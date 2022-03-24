import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoIcYhG4z0DRJrthtF-K_A9iDTwWkvPXg",
  authDomain: "emppowcs.firebaseapp.com",
  projectId: "emppowcs",
  storageBucket: "emppowcs.appspot.com",
  messagingSenderId: "835684709209",
  appId: "1:835684709209:web:08cf67030224cb86c15248",
  measurementId: "G-38HRGN5PED"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth}
