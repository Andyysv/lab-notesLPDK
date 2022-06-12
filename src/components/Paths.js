import {
    Routes,
    Route,
  } from "react-router-dom";
import Login from "./noauntenticate/Login";
import { loginWithGoogle, Logout } from "../lib/firebaseAuth.js"
import NotesLayout from "./autenticate/NotesLayout";
//importar componentes
import Edit from "./Show"
import Create from "./Show"


//importamos el router



// importar todas tus funciones 
// despues de importar, enviar como props
//Rutas
const Paths = ({isAutenticate}) =>  {
    return (
      
    <div>
      {isAutenticate?
      <>
        <Routes>
        <Route path= "/create" element = {<Create/> }/> 
          <Route path= "/edit/:id" element = {<Edit/> }/>
          <Route path="/" element={<NotesLayout Logout={Logout}/>} />
        </Routes>
        </>
        :
        <Routes>
          <Route path="/" element={<Login loginWithGoogle={loginWithGoogle} />} />
        </Routes>
        
      }
    </div>);
}

export default Paths; 
