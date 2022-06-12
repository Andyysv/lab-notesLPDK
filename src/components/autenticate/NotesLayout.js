
import Show from "../../components/Show"; 
const NotesLayout =({Logout})=>{
    return(
        <>
        <div className="NotesLayout"> 

           

        </div>
        <div>Notes
            <Show />
             <button onClick = {()=>{Logout()}}> Sing out</button>
        </div>
        </>
    )
}
export default NotesLayout

