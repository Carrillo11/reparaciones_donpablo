import firebase from 'firebase/app'
import 'firebase/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyAlkQ0AjByYoDeXUMqdfDJwcCFBG439CrE",
    authDomain: "pupuseria-serpas.firebaseapp.com",
    databaseURL: "https://pupuseria-serpas.firebaseio.com",
    projectId: "pupuseria-serpas",
    storageBucket: "pupuseria-serpas.appspot.com",
    messagingSenderId: "789582476029",
    appId: "1:789582476029:web:841a0745bcd21c9e368494"
};

const uiConfig = {
    singInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    singInSuccessUrl:"/",
};

const fb =  firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore();
  export const auth = fb.auth();

  db.settings({
      timestampsInSnapshots: true,
  });

  export const starUi = (elementId) => {
       const ui = new firebaseui.auth.AutUI(auth);
       ui.start(elementId, uiConfig);
  };