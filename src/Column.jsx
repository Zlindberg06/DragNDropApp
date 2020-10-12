import React from "react";
import { Droppable } from "react-beautiful-dnd";

function Column(props) {
  return (
    <Droppable droppableId={props.dropId}>
      {(provided) => (
          <div
            className="taskColumn"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <p>{props.text}</p>
            <p>{props.showNotes}</p>
            {provided.placeHolder}
          </div>
      )}
    </Droppable>
  );
}

export default Column;
