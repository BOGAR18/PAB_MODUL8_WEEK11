import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyC2FTsbPrTDqIdO9F6sqX7Xjs0Q-xq4F5c",
    authDomain: "pab-week-12.firebaseapp.com",
    projectId: "pab-week-12",
    storageBucket: "pab-week-12.appspot.com",
    messagingSenderId: "259913728609",
    appId: "1:259913728609:web:d1d7192e4cf86c1b112020"
});

const FIREBASE = firebase;

export default FIREBASE;