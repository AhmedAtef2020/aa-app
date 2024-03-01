import React, { useState } from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import { Zoom } from "@mui/material";


function InputCard(props) {
    const [inputNote, setInputNote] = useState({
        title: "",
        details: ""
    });
    const [focused, SetFocused] = useState(false)

    function changeHandle(event) {
        const { name, value } = event.target;
        setInputNote({ ...inputNote, [name]: value })
    }

    function formFocus() {
        SetFocused(true);
    }

    return (
        <div>
            <div className="inputCard">
                <form onFocus={formFocus}>
                    {focused &&
                        <input
                            onChange={changeHandle}
                            className="inputField"
                            type="text"
                            placeholder="Note title"
                            value={inputNote.title}
                            name="title">
                        </input>}
                    <textarea
                        onChange={changeHandle}
                        placeholder="Take a note ..."
                        value={inputNote.details}
                        rows={focused ? 5 : 1}
                        name="details">
                    </textarea>

                    <Zoom in={focused}>
                        <Fab onClick={(event) => {
                            props.onAdd(inputNote);
                            setInputNote({
                                title: "",
                                details: ""
                            });
                            SetFocused(false)
                            event.preventDefault();
                        }}>

                            <Tooltip title="Add" >
                                <AddCircleOutlineOutlinedIcon />
                            </Tooltip>
                        </Fab>
                    </Zoom>
                </form>
            </div>
        </div>

    );
};

export default InputCard;