import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
firebase.initializeApp({
  apiKey: "AIzaSyAdm3cPIofLcYskTZUKSMLvu5pI0Lmf7sE",
  authDomain: "devicelist-fad65.firebaseapp.com",
  projectId: "devicelist-fad65",
});
var db = firebase.firestore();
export default db;
