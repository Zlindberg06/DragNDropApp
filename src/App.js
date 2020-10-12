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

  function displayNotes() {
    return notes.map((note, index) => {
      return (
        <Note key={index} id={uuidv4()} noteContent={note} index={index} />
      );
    });
  }


  function handleOnDragEnd(result){

    const newNotesArray = Array.from(notes);
    const [reorderedItem] = newNotesArray.splice(result.source.index, 1);
    newNotesArray.splice(result.destination.index, 0, reorderedItem);
    if(!result.destination) return;
    setNote(newNotesArray);
  }

  return (
    <div>
      <form>
        <p>Add a Task</p>
        <input type="text" value={taskText} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
      <div className="container">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Column
        dropId={uuidv4()}
        text="To-Do"
          showNotes={displayNotes()}
        />
        <Column
        dropId={uuidv4()} 
        text="In Progress"
        />
        <Column
        dropId={uuidv4()} 
        text="Done"/>
      </DragDropContext>
      </div>
    </div>
  );
}

export default App;
