import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState(
    ''
  )
  const [showAll, setShowAll] = useState(false);

  const addNote = (e) => {
    e.preventDefault();
    console.log('button', e.target);
    let dupNotes = [...notes];
    const newContent = newNote
    dupNotes.push({
      id : dupNotes.length + 1,
      content : newContent,
      date : new Date(),
      important: Math.random() < 0.5, 
    });

    setNotes(dupNotes);
    setNewNote('');
  }

  const handleInput = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  }

  const handleShowAll = (e) => {
    setShowAll(!showAll);
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {
          notes.map((note) => {
            if(showAll || note.important) {
              return (
                <Note key = {note.id} note = {note}/>
              )
            }
          })
        }
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleInput}/>
        <button type="submit">save</button>
      </form>
      {
        showAll 
        &&
        <button onClick={handleShowAll}>Filter</button>
      }
      {
        !showAll
        &&
        <button onClick={handleShowAll}>Show All</button>
      }
    </div>
  )
}

export default App