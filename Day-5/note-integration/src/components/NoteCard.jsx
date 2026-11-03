

function NoteCard({note,ondelete,getUpdateData}){
    return(
<div className="flex flex-col gap-3 border border-white rounded-xl p-3 wrap-break-word w-70">
   <h1 className="bg-pink-400 p-2">Your Notes Data</h1>
   <div><p className="p-2">Title: {note.title}</p></div>
   <div><p className="p-2">Description: {note.description}</p></div>
   <div className="flex gap-3"><button className="p-2 bg-green-600" onClick={()=>{getUpdateData(note)}}>Update</button><button className="p-2 bg-red-700" onClick={()=>ondelete(note._id)}>Delete</button></div>
</div>
    )
   
}
export default NoteCard