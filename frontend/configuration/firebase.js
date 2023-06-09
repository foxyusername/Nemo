// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZAy31FpmVpjcjU13RHVEXgTYSFBM8qxA",
  authDomain: "nemo-e121d.firebaseapp.com",
  projectId: "nemo-e121d",
  storageBucket: "nemo-e121d.appspot.com",
  messagingSenderId: "1043140504297",
  appId: "1:1043140504297:web:a97614a4f66dbf0b221e78",
  measurementId: "G-039HEPZC9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
