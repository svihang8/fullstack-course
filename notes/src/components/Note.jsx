const Note = ({ note , handleImportance }) => {
    return (
      <li>
        <p>{note.content}</p>
        <button onClick={() => {handleImportance(note.id)}}>{note.important ? 'make unimportant' : 'make important'}</button>
      </li>
    )
  }
  
export default Note