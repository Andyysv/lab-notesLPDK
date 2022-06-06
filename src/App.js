import { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import Paths from "./components/Paths"

import { onAuthStateChanged } from "firebase/auth";
import {auth} from './lib/firebaseConfig'

function App() {
  const [isAutenticate, setAutenticate] = useState(null);
 
  onAuthStateChanged(auth, (user) => {
    if (user) {
     setAutenticate(user)
    } else {
      setAutenticate(null);
    }
  });
  return (<BrowserRouter><Paths isAutenticate={isAutenticate}/></BrowserRouter>
  );
}

export default App;
