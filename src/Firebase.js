import firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyATRXzQ-DnmBR7ujrFNY5RVNpQTzvaftZc",
    authDomain: "quantavid-7adff.firebaseapp.com",
    projectId: "quantavid-7adff",
    storageBucket: "quantavid-7adff.appspot.com",
    messagingSenderId: "993761566022",
    appId: "1:993761566022:web:8f0609965daba82b211947"
});

var auth = firebase.auth();
var db = firebase.firestore();
var storage = firebase.storage();

export { auth, db,storage };
