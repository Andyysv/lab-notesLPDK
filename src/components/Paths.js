import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./noauntenticate/Login";
import { loginWithGoogle, Logout } from "../lib/firebaseAuth.js"
import NotesLayout from "./autenticate/NotesLayout";
//importar componentes
import Show from "./Show"
import Create from "./Create"
import Edit from "./Edit"


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
      <Route path= "/Create" element = {<Create/> }/> 
      <Route path= "/Edit/:id" element = {<Edit/> }/> 
      <Route path= "/" element = {<Show/> }/> 
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