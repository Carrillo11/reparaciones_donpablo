import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGS4bvud_zqgWYPchDEHhulRsfJoMXNyA",
    authDomain: "zapateria---donpablo.firebaseapp.com",
    databaseURL: "https://zapateria---donpablo-default-rtdb.firebaseio.com",
    projectId: "zapateria---donpablo",
    storageBucket: "zapateria---donpablo.appspot.com",
    messagingSenderId: "166542727779",
    appId: "1:166542727779:web:50130bd84b1a76b41f7656"
}

// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
export const db = fire.firestore();
