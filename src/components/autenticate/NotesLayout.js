

const NotesLayout =({Logout})=>{
    return(
        <div>Notes
             <button onClick = {()=>{Logout()}}> Sing out</button>
        </div>
    )
}
export default NotesLayout