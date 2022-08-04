// Import the functions you need from the SDKs you need
import { initializeApp, auth } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjUCMjLUqw2xVEgbkPIhIDWuikcbUK5w8",
  authDomain: "auth-redux-b3dd0.firebaseapp.com",
  projectId: "auth-redux-b3dd0",
  storageBucket: "auth-redux-b3dd0.appspot.com",
  messagingSenderId: "672988115048",
  appId: "1:672988115048:web:04e31bda5c7e7ae7f6cbdd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
