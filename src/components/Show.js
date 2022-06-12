import React , { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { collection, getDocs, getDoc, delectDoc, doc } from "firebase/firestore"
import { db } from "../lib/firebaseConfig"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const MySwal= withReactContent(Swal)


//funcion para mostrar las notas
const Show = () => {
const [notes, setNotes] = useState([])

const lpdkCollection = collection (db, "notes")

const getNotes= async () => {
    const data = await getDocs (lpdkCollection)

    setNotes(
        data.docs.map( (doc) => ( {...doc.data(), id:doc.id}))
        )
        console.log(notes)
}

// función para eliminar
const deleteNotes = async (id) => {
 const notesDoc= doc(db, "notes", id)
 await deleteNotes(notesDoc)
 getDocs()
}

useEffect( () => {
    getNotes()
    //eslint-disable-next-line
}, [] )

    return (
         <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="d-grid gap-2">
<Link to= "/create" className="btn btn-secondary mt-2 mb-2"> Create</Link>
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
                                            <Link to={`/edit/${note.id}`} className= "btn btn-light"><i className="fa-solid fa-pen"></i></Link>
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