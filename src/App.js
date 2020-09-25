import React, { useState } from "react";
import Column from "./Column";
import Note from "./Note";
import { DragDropContext } from "react-beautiful-dnd";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [taskText, setTaskText] = useState("");
  const [notes, setNote] = useState([]);

  function handleChange(event) {
    setTaskText(event.target.value);
  }

  function handleClick(event) {
    setNote((prevNotes) => {
      return [...prevNotes, taskText];
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <p>Add a Task</p>
        <input type="text" value={taskText} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
      <DragDropContext onDragEnd={() => {}}>
        <Column
          showNotes={notes.map((note, index) => {
            return (
              <Note key={index} id={uuidv4()} noteContent={note} index={index} />
            );
          })}
        />
      </DragDropContext>
    </div>
  );
}

export default App;
