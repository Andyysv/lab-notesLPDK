import React , { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"
import { db } from "../lib/firebaseConfig"
//import Swal from "sweetalert2"
//import withReactContent from "sweetalert2-react-content"
// const MySwal= withReactContent(Swal)

// hook para navegar : useNavigate 
//funcion para mostrar las notas
const Show = () => {

    const navigate = useNavigate(); 

    const navCreate = () => {
        navigate("/Create");
    }

const [notes, setNotes] = useState([])

const lpdkCollection = collection (db, "notes")

//Función para renderizar las notas
const getNotes= async () => {
    const data = await getDocs (lpdkCollection)

    setNotes(
        data.docs.map( (doc) => ( {...doc.data(), id:doc.id}))
        )
        console.log(notes)
}

// función para eliminar notas
const deleteNotes = async (id) => {
    const notesDoc= doc(db, "notes", id)
    await deleteDoc(notesDoc)
    getNotes()
}

useEffect( () => {
    getNotes()
    //eslint-disable-next-line
}, [] )

useEffect ( () => {
console.log("mis notas", notes)
}, [notes] )

    return (
         <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="d-grid gap-2">
< button className="buttonCreate" type = "submit" onClick = {navCreate}>Create Note </button>
                               </div>
                                <table className="table table-dark table-hover">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { notes.map( (note=> (
                                        <tr key= {note.id}>
                                        <td> {note.title} </td> 
                                        <td> {note.description} </td> 
                                        <td>
                                            <button onClick = { () => {deleteNotes(note.id) } } className= "btn btn-danger"> <i className="fa-solid fa-trash-can"></i></button>
                                        </td>     
                                        </tr>
                                    ) )) }
                                </tbody>
                             </table>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Show