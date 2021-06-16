import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAlkQ0AjByYoDeXUMqdfDJwcCFBG439CrE",
    authDomain: "pupuseria-serpas.firebaseapp.com",
    databaseURL: "https://pupuseria-serpas.firebaseio.com",
    projectId: "pupuseria-serpas",
    storageBucket: "pupuseria-serpas.appspot.com",
    messagingSenderId: "789582476029",
    appId: "1:789582476029:web:841a0745bcd21c9e368494"
}

// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
export const db = fire.firestore();
