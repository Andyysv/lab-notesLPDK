//Aqui es el muro donde se muestran todas las notas

import React , { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { collection, getDocs, doc, deleteDoc,query, orderBy } from "firebase/firestore"
import { auth, db } from "../lib/firebaseConfig"
import "./Show.css"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const MySwal= withReactContent(Swal)



// hook para navegar : useNavigate 
//funcion para mostrar las notas
const Show = () => {

    const navigate = useNavigate(); 
    const user = auth.currentUser; 
    const name = user?.displayName;
    const userPhoto = user?.photoURL; 

    const navCreate = () => {
        navigate("/Create");
    }

const [notes, setNotes] = useState([])

const lpdkCollection = collection (db, "notes")

//Función para renderizar las notas
const getNotes= async () => {
    const data = await getDocs (lpdkCollection)
    

    const q = query(collection(db, 'notes'), orderBy('date', 'desc'));
    console.log(q)
    
    
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
// SWEET ALERT...
const handleDeleteItem = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
        if (result.isConfirmed) {
        deleteNotes(id);
        MySwal.fire('Deleted!', 'Your file has been deleted.', 'success');
        }
    });
    };

useEffect( () => {
    getNotes()
    //eslint-disable-next-line
}, [] )

useEffect ( () => {
console.log("mis notas", notes)
}, [notes] )

    return (
            <>
                <section className="newNoteView">
                    <div className="containerNotes">
                    <div className="userContainerNotes">
                    <img src={userPhoto} alt="userPic" className="userPhoto" />
                    <div className="displayName">
                        {' '}
                        ¡Welcome
                        {' '}
                        {name}
                        !
                        {' '}
                        <div className="containerButtonCreate">
                            <p> Mis notas: </p>
                        < button className="buttonCreate" type = "submit" onClick = {navCreate}>Create Note </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container">


                                </div>
                                <section className="notesDashboard">
                                <div className="allTheNotes">
                                    { notes.map( (note=> (
                                        <div className="notesAlreadyMade" key= {note.id}>
                                        <p> {note.title} </p> 
                                        <p> {note.description} </p> 
                                        <div>
                                            <button onClick = { () => { handleDeleteItem(note.id) } } className= "btn btn-danger"> <i className="fa-solid fa-trash-can"></i></button>
                                        </div>     
                                        </div>
                                    ) )) }
                                </div>
                        </section>
                </section>
        </>
    )
}

export default Show