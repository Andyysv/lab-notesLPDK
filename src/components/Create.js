import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css';
import { auth, notes } from '../lib/firebaseConfig';

export const Create = () => {
    //foto, nombre de usuario
    const navigate = useNavigate();

    //1 donde escribir titulo y nota CHECK
    //2 Boton para guardar: guardar titulo y texto 
    //3 Como guardarla : conexion con firebase/firestore

    const user = auth.currentUser; 
    const name = user?.displayName;
    const userPhoto = user?.photoURL; 

    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState(''); 


    const handleNavShow = () => {
    
       // notes(noteTitle, noteText);
        navigate("/");
      };
    
      const Title = (event) => {
        setNoteTitle(event.target.value);
      };
      const Text = (event) => {
        setNoteText(event.target.value);
      };
//funcion que guarda la nota en firebase
      const handleCreateNote = () => {
        notes(noteTitle, noteText);
        navigate("/");
      };
    

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
          </div>
        </div>
      </div>
          <form className="writeAreaContainer">
            <input type="text" id="titleNote" placeholder="Title" onChange={Title} />
            <textarea id="bodyNote" placeholder="Write your note here" rows="40" cols="40" onChange={Text}/>
          </form>
          <footer className="menuContainerNotes">
          <button type="submit" className='saveNoteButton' onClick={handleCreateNote}>Save Note</button>
            <button type="submit" className='goHomeButton' onClick={handleNavShow}>Go home</button>
          </footer>
        </section>
        </>
      );
    }
    
    export default Create;