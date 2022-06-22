

const NotesLayout = ({ Logout }) => {
    return (
        <>
            <div className="NotesLayout">
            </div>
            <div>Notes
                <button onClick={() => { Logout() }}> Sing out</button>
            </div>
        </>
    )
}
export default NotesLayout

