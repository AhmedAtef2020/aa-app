import React from "react";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

function Header() {
    return (
        <header>
            <h1>
                My Keeper <SpeakerNotesIcon sx={{ fontSize: 25 }} /></h1>
        </header>
    );
};

export default Header;