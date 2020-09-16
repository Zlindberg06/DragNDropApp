import React from 'react';

function Note(props){
    return(
        <div className="note">
            <p>{props.noteContent}</p>
        </div>
    )
}


export default Note;