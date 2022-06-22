import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../lib/firebaseConfig"

const Edit = () =>{
//hooks de create
const [noteTitle, setNoteTitle] = useState('');
const [noteText, setNoteText] = useState(''); 

const navigate = useNavigate()
const { id } = useParams()


 // funcion que sirve para actualizar
const update = async () => {
   const notes= doc(db, "notes", id)
   const data = {title: noteTitle, description: noteText }
   await updateDoc(notes, data)
   navigate('/Show') 
};

const getNoteById = async (id) => {
const notes = await getDoc(doc(db, "notes", id))
if (notes.exists()){
console.log(notes.data())
setNoteTitle(notes.data().title);
      setNoteText(notes.data().description);

    } else {
        console.log("no existe")
    }
}

useEffect( () => {
    getNoteById(id)
    // eslint-disable-next-line
}, [])

/*const handleNavShow = () => {
    
    // notes(noteTitle, noteText);
     navigate("/Show");
   };
 
   /*const Title = (event) => {
     setNoteTitle(event.target.value);
   };
   const Text = (event) => {
     setNoteText(event.target.value);
   };*/

    return (
<section className="newNoteView">
          <form className="writeAreaContainer">
            <input type="text" id="titleNote" placeholder="Title" value={noteTitle} onChange={(e) => { setNoteTitle(e.target.value); }} />
            <textarea id="bodyNote" placeholder="Write your note here" rows="40" cols="40" value= {noteText} onChange={(e) => { setNoteText(e.target.value); }}/>
          </form>
          <button onClick={() => { update(id); }}> UPDATE </button> 
        </section>
        
    )
}

export default Edit