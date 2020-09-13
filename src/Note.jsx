import React from 'react';

function Note(props){
    return(
        <div class="note">
            <p>{props.content}</p>
        </div>
    )
}


export default Note;