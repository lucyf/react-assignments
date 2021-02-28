 
 import firebase from 'firebase/app';
 import '@firebase/firestore';

 const app = firebase.initializeApp(
    {
        apiKey: "AIzaSyBDUPLMRuWogOxlDa5vT0jgTacIf9upQIc",
        authDomain: "primer-proyecto-a6865.firebaseapp.com",
        projectId: "primer-proyecto-a6865",
        storageBucket: "primer-proyecto-a6865.appspot.com",
        messagingSenderId: "824944917965",
        appId: "1:824944917965:web:0cf8a40615c675e5b15884",
        measurementId: "G-LHKMF0R9XZ"
      }

 );
 
 export const getFireBase = () => {
     return app;
 }

 export const getFirestore = () => {
     return firebase.firestore(app)
 }

