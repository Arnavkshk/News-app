import React, { useContext } from 'react'

import Noteitem from "./Noteitem"
import Addnote from './Addnote';

function Notes() {
    const context = useContext(noteContext);
    const {notes}=context;
  return (
    <>
    <Addnote/>
    <div className='row my-3'>
         <h3>Your notes</h3>
        {notes.map((note)=>{
        return <Noteitem key={note._id} note={note}/>

      })}
    </div>
    </>
  )
}

export default Notes
