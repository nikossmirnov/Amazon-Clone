// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD9dHA79vBKSIVtOq2HMNifzLgnJm44HgY",
    authDomain: "clone-d6e74.firebaseapp.com",
    databaseURL: "https://clone-d6e74.firebaseio.com",
    projectId: "clone-d6e74",
    storageBucket: "clone-d6e74.appspot.com",
    messagingSenderId: "633425010259",
    appId: "1:633425010259:web:65bc74db39bb63fab630a6",
    measurementId: "G-6XF0CFHFP1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };