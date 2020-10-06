import React from "react";
import { Droppable } from "react-beautiful-dnd";

function Column(props) {

 
  return (
    <Droppable droppableId="droppable-1">
      {(provided) => (
        <div
          className="taskColumn"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <p>To-Do</p>
          <p>{props.showNotes}</p>
          {provided.placeHolder}
        </div>
      )}
    </Droppable>
  );
}

export default Column;
