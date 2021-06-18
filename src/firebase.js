import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyApchnq0gDmgMdt4ixwx8FDjlnBX4mt8mM",
    authDomain: "donpablo-1edd6.firebaseapp.com",
    databaseURL: "https://donpablo-1edd6-default-rtdb.firebaseio.com",
    projectId: "donpablo-1edd6",
    storageBucket: "donpablo-1edd6.appspot.com",
    messagingSenderId: "975042208329",
    appId: "1:975042208329:web:e0909573484a75a3305598"
}

// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
export const db = fire.firestore();
