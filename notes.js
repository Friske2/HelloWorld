const fs = require('fs');
var fetchNote = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json')
       return JSON.parse(notesString)
    } catch (e) {
        return []
    }
};
var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title, body) =>{
    var notes = fetchNote();
    var note = {
        title,
        body
    }
  
    var duplicateNotes = notes.filter((note)=> note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNote(notes);
        return note;
    }
}
var getAll = () =>{
    return fetchNote()
}
var getNote = (title) =>{
    var notes = fetchNote();
    var filteredNotes = notes.filter((note)=> note.title === title)
    return filteredNotes[0]
}
var removeNote = (title) =>{
    // fetch notes
    var notes = fetchNote();
    // filter notes, remove the one with title of argument
    var filterNotes = notes.filter((note)=> note.title !== title);
    // save bew notes my array
    saveNote(filterNotes);
    return notes.length !== filterNotes.length;
}
var logNote = (note) =>{
    // Break on this line and use repl to output note
    // Use read command with --title
    console.log('---');
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
}
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}
