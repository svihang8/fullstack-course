import { useState, useEffect } from "react";
import Note from "./components/Note";
import { getAll, create, update } from "../src/services/notes";

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    getAll().then((res) => {
      console.log(res.data);
      setNotes(res.data);
    });
  }, []);

  const addNote = (e) => {
    e.preventDefault();
    console.log("button", e.target);

    let dupNotes = [...notes];
    const newContent = newNote;
    const note = {
      content: newContent,
      date: new Date(),
      important: Math.random() < 0.5,
    };

    create(note).then((res) => {
      console.log("note", res.data);
      dupNotes.push(res.data);
      setNotes(dupNotes);
      setNewNote("");
    });
  };

  const handleImportance = (id) => {
    console.log("importance button clicked");

    let editNote = notes.find((note) => {
      return note.id === id;
    });

    console.log("editNote", editNote);

    let changedNote = { ...editNote };
    changedNote.important = !changedNote.important;

    console.log("changedNote", changedNote);
    update(id, changedNote)
      .then((res) => {
        console.log("res", res);
        let dupNotes = [...notes];
        dupNotes = dupNotes.map((note) => {
          if (note.id === id) {
            return res.data;
          }
          return note;
        });
        setNotes(dupNotes);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setNewNote(e.target.value);
  };

  const handleShowAll = (e) => {
    setShowAll(!showAll);
  };
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => {
          if (showAll || note.important) {
            return (
              <Note
                key={note.id}
                note={note}
                handleImportance={handleImportance}
              />
            );
          }
        })}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleInput} />
        <button type="submit">save</button>
      </form>
      {showAll && <button onClick={handleShowAll}>Filter</button>}
      {!showAll && <button onClick={handleShowAll}>Show All</button>}
    </div>
  );
};

export default App;
