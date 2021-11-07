// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPFNkwqhF7KKVSTXftEl37cDHO5eLz42s",
  authDomain: "uber-next-clone-66b00.firebaseapp.com",
  projectId: "uber-next-clone-66b00",
  storageBucket: "uber-next-clone-66b00.appspot.com",
  messagingSenderId: "971636312739",
  appId: "1:971636312739:web:336b30042d9109dca94d16",
  measurementId: "G-NBQ51HQHQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth}