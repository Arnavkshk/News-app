// import { useState } from "react";
import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "localhost:5000"
  const notesInitial = []

  const addNote = async(title, description
    , tag) => {

      const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", 
     
      headers: {
        "Content-Type": "application/json",
        "authtoken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZjBkMzdkZDE4MzcyMDk0NWUyMjhiIn0sImlhdCI6MTY3OTA1ODQ3NH0.XQQLYEtWxWv-fULhInFiwkAox6o7GzmxTJIvSNdtmjweyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZjBkMzdkZDE4MzcyMDk0NWUyMjhiIn0sImlhdCI6MTY3OTA1ODQ3NH0.XQQLYEtWxWv-fULhInFiwkAox6o7GzmxTJIvSNdtmjw"
      },
      body: JSON.stringify({title,description,tag}), 
    });

    const note = {
      "_id": "64247f031206f3a7cb811119",
      "user": "640f0d37dd183720945e228b",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-03-29T18:10:11.296Z",
      "__v": 0
    };
    setNotes(notes.concat(note))

  }
  const deleteNote = (id) => {
    const newNote=notes.filter((note)=>{return note._id!==id})
    setNotes(newNote) 
  }

  const editNote = async (id,title,description,tag) => {

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST", 
     
      headers: {
        "Content-Type": "application/json",
        "authtoken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZjBkMzdkZDE4MzcyMDk0NWUyMjhiIn0sImlhdCI6MTY3OTA1ODQ3NH0.XQQLYEtWxWv-fULhInFiwkAox6o7GzmxTJIvSNdtmjweyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwZjBkMzdkZDE4MzcyMDk0NWUyMjhiIn0sImlhdCI6MTY3OTA1ODQ3NH0.XQQLYEtWxWv-fULhInFiwkAox6o7GzmxTJIvSNdtmjw"
      },
      body: JSON.stringify({title,description,tag}), 
    });
    const json =  response.json();
    
    for (let index=0; index<notes.length; index++){
      const element = notes[index];
      if(element._id===id){
        element.title=title;
        element.description=description;
        element.tag=tag;
      }
    }
  }

  const [notes, setNotes] = useState(notesInitial)

  return (
    
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  )
}
  
export default NoteState;