import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';


function Notes(props) {
    return (
        <div className="notesContainer">
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.detail}</p>
                <button onClick={() => { props.clickDel(props.id); }}>
                    <Tooltip title="Delete" >
                        <DeleteIcon />
                    </Tooltip>
                </button>
            </div>
        </div>

    );
};

export default Notes;