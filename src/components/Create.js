/*import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, notes } from '../../lib/firebase-config';

export const createNewNote = () => {
    //foto, nombre de usuario
    const navigate = useNavigate();
    const user = auth.currentUser;
    const name = user?.displayName;
    const userPhoto = user?.photoURL;

    const [noteTitle, setNoteTitle] = useState('');
    const [noteText, setNoteText] = useState('');

//copia de ari para ver si aparecía algo :(
    const handleAddNote = () => {
    
        notes(noteTitle, noteText);
        navigate('/');
      };
    
      const Title = (event) => {
        setNoteTitle(event.target.value);
      };
      const Text = (event) => {
        setNoteText(event.target.value);
      };
    
      const handleNavHome = () => {
        navigate('/');
      };
    
      return (
        <section className="newNoteView">
          <div className="nameContainerNotes">
            <div className="userContainer">
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
            <textarea id="bodyNote" placeholder="Write your note here" rows="40" cols="40" onChange={Text} />
          </form>
          <footer className="menuContainerNotes">
            <BsFileEarmarkCheckFill
              type="submit"
              className="iconNote"
              size="2.5em"
              onClick={handleAddNote}
            />
            <MdHome type="submit" className="iconNote" size="3em" onClick={handleNavHome} />
          </footer>
        </section>
      );
    }
    
    export default NewNote;*/