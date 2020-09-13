import React, {useState}from "react";
import Column from "./Column";
import Note from "./Note";

function App() {

  const [taskText, setTaskText] = useState("");

  function handleChange(event){
    setTaskText(event.target.value);
    console.log(taskText);
    
  }



  return (
    <div>
      <form>
        <p>Add a Task</p>
        <input type="text" value={taskText} onChange={handleChange}/>
        <button>Add</button>
      </form>
      <Column/>
    </div>
  );
}

export default App;
