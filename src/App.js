import React, {useState}from "react";
import Column from "./Column";
import Note from "./Note";

function App() {

  const [taskText, setTaskText] = useState("");
  const [notes, setNote] = useState([]);

  function handleChange(event){
    setTaskText(event.target.value);
    
  }

  function handleClick(event){
    setNote((prevNotes) => {
      return [...prevNotes, taskText]
    });
    event.preventDefault();
    
  }

  return (
    <div>
      <form>
        <p>Add a Task</p>
        <input type="text" value={taskText} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
      </form>
      <Column/>
      {notes.map((note, index) => {
        return(
        <Note 
        key={index}
        noteContent={note}
        />
        );
      })}
    </div>
  );
}

export default App;
