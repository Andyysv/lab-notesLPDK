import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyC36CdYDa8ZJBK4lkIVgs0a7zJj3ZlpZ78",
  authDomain: "lab-notes-c2cde.firebaseapp.com",
  projectId: "lab-notes-c2cde",
  storageBucket: "lab-notes-c2cde.appspot.com",
  messagingSenderId: "657200833326",
  appId: "1:657200833326:web:d6fd12296a2b02115e50bf",
  measurementId: "G-S1Z23MXP4R"
}

initializeApp(firebaseConfig);


 export const auth = getAuth();