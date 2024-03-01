import React, { useState } from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Notes from "./Notes.jsx"
// import cardsData from "../cardsData.js"
import InputCard from "./InputCard.jsx"


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes((preNotes) => { return [...preNotes, newNote] });

    }

    function delNote(id) {
        setNotes((preNotes) => { return preNotes.filter((note, index) => { return index !== id }) })
    }
    return (
        <div>
            <Header />
            <InputCard onAdd={addNote} />
            {notes.map((note, index) =>
                <Notes
                    key={index}
                    id={index}
                    title={note.title}
                    detail={note.details}
                    clickDel={delNote}
                />)}
            <Footer />
        </div>);
};

export default App;