import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAS3CBLjzyY0N1TSlSOleyRdWwVAnMIktc",
    authDomain: "zaio-2c173.firebaseapp.com",
    projectId: "zaio-2c173",
    storageBucket: "zaio-2c173.firebasestorage.app",
    messagingSenderId: "1005877555459",
    appId: "1:1005877555459:web:03a649e01fcb46353f3936"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
console.log(db, auth);

export { db, auth };