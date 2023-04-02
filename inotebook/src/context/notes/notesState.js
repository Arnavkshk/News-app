// import { useState } from "react";
import { useState } from "react";
import noteContext from "./notesContext";

const NoteState = (props)=>{
    const notesInitial=[
        {
          "_id": "64247f031206f3a7cb742119",
          "user": "640f0d37dd183720945e228b",
          "title": "my title",
          "description": "dsajfhasdlfhkljadhsfasd wake up early",
          "tag": "personal",
          "date": "2023-03-29T18:10:11.296Z",
          "__v": 0
        },
        {
          "_id": "64247f031206f3a7cb742119",
          "user": "640f0d37dd183720945e228b",
          "title": "my title",
          "description": "dsajfhasdlfhkljadhsfasd wake up early",
          "tag": "personal",
          "date": "2023-03-29T18:10:11.296Z",
          "__v": 0
        },
        {
          "_id": "64247f031206f3a7cb742119",
          "user": "640f0d37dd183720945e228b",
          "title": "my title",
          "description": "dsajfhasdlfhkljadhsfasd wake up early",
          "tag": "personal",
          "date": "2023-03-29T18:10:11.296Z",
          "__v": 0
        },
        {
          "_id": "64247f031206f3a7cb742119",
          "user": "640f0d37dd183720945e228b",
          "title": "my title",
          "description": "dsajfhasdlfhkljadhsfasd wake up early",
          "tag": "personal",
          "date": "2023-03-29T18:10:11.296Z",
          "__v": 0
        },
        {
          "_id": "64247f031206f3a7cb742119",
          "user": "640f0d37dd183720945e228b",
          "title": "my title",
          "description": "dsajfhasdlfhkljadhsfasd wake up early",
          "tag": "personal",
          "date": "2023-03-29T18:10:11.296Z",
          "__v": 0
        },
        {
          "_id": "64247f031206f3a7cb742119",
          "user": "640f0d37dd183720945e228b",
          "title": "my title",
          "description": "dsajfhasdlfhkljadhsfasd wake up early",
          "tag": "personal",
          "date": "2023-03-29T18:10:11.296Z",
          "__v": 0
        }
      ]

      const addNote=(title,description
        ,tag)=>{
        const note= {
          "_id": "64247f031206f3a7cb742119",
          "user": "640f0d37dd183720945e228b",
          "title": "my new added note",
          "description": "new note added",
          "tag": "personal sadjhf",
          "date": "2023-03-29T18:10:11.296Z",
          "__v": 0
        };
        setNotes(notes.push(note))

      }
      const deleteNote=()=>{

      }

      const editNote=()=>{
        
      }

      const[notes,setNotes]=useState(notesInitial)
       
    return(

        <noteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;