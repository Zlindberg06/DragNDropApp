import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Note(props) {
  return (
    <Draggable draggableId="draggable-1" index={0}>
      {(provided) => (
        <div
          className="note"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>{props.noteContent}</p>
        </div>
      )}
    </Draggable>
  );
}

export default Note;
