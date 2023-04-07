// import { useState } from "react";
import { useState } from "react";
import noteContext from "./notesContext";

const NoteState = (props)=>{
    const notesInitial=[
        {
          "_id": "64247f031206f3a7cb752119",
          "user": "640f0d37dd183720945e228b",
          "title": "my title",
          "description": "dsajfhasdlfhkljadhsfasd wake up early",
          "tag": "personal",
          "date": "2023-03-29T18:10:11.296Z",
          "__v": 0
        },
        {
          "_id": "64247f031206f3a7cb762119",
          "user": "640f0d37dd183720945e228b",
          "title": "my title",
          "description": "dsajfhasdlfhkljadhsfasd wake up early",
          "tag": "personal",
          "date": "2023-03-29T18:10:11.296Z",
          "__v": 0
        },
        {
          "_id": "64247f031206f3a7cb772119",
          "user": "640f0d37dd183720945e228b",
          "title": "my title",
          "description": "dsajfhasdlfhkljadhsfasd wake up early",
          "tag": "personal",
          "date": "2023-03-29T18:10:11.296Z",
          "__v": 0
        },
        {
          "_id": "64247f031206f3a7cb782119",
          "user": "640f0d37dd183720945e228b",
          "title": "my title",
          "description": "dsajfhasdlfhkljadhsfasd wake up early",
          "tag": "personal",
          "date": "2023-03-29T18:10:11.296Z",
          "__v": 0
        },
        {
          "_id": "64247f031206f3a7cb792119",
          "user": "640f0d37dd183720945e228b",
          "title": "my title",
          "description": "dsajfhasdlfhkljadhsfasd wake up early",
          "tag": "personal",
          "date": "2023-03-29T18:10:11.296Z",
          "__v": 0
        },
        {
          "_id": "64247f031206f3a7cb802119",
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
      const deleteNote=()=>{
        console.log("deketing note with id ",+id)
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