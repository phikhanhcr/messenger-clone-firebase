import firebase from 'firebase'
const fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC6UTK1_pel2Hs8zFfnPXJ3UrtbCD4HI-E",
  authDomain: "messenger-firebase-clone.firebaseapp.com",
  databaseURL: "https://messenger-firebase-clone.firebaseio.com",
  projectId: "messenger-firebase-clone",
  storageBucket: "messenger-firebase-clone.appspot.com",
  messagingSenderId: "46430333541",
  appId: "1:46430333541:web:c5f2180b1d9a0a869b348c",
  measurementId: "G-J9ZBXPLQS2"
})
const db = fireBaseApp.firestore();
export default db;