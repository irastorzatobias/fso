import React, { useState } from "react";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [note, setNote] = useState("");

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: note,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(noteObject));
    setNote("");
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} content={note.content} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={note} onChange={handleNoteChange}></input>
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
