import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp, } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC36CdYDa8ZJBK4lkIVgs0a7zJj3ZlpZ78",
  authDomain: "lab-notes-c2cde.firebaseapp.com",
  projectId: "lab-notes-c2cde",
  storageBucket: "lab-notes-c2cde.appspot.com",
  messagingSenderId: "657200833326",
  appId: "1:657200833326:web:d6fd12296a2b02115e50bf",
  measurementId: "G-S1Z23MXP4R"
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 

export const auth = getAuth();

// -----SAVE NOTES ON FIREBASE

export const notes = (title, note) => {
  const user = auth.currentUser;
  const { uid } = user;
  addDoc(collection(db, 'notes'), {
    title,
    note,
    userID: uid,
    date: serverTimestamp(),
  });
};



//1. Algo que me permita crear lña coleccion
// 2. Algo que me permita acceder a esa coll
//3. Algo que me permita guardar mi documento en la col
//4. Algo que me permita verlo