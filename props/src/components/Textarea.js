import React, {useState} from 'react'

export default function Textarea(props) {
    const handleupclick=()=>{
        console.log("uppercase was clicked");
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleonchange=(event)=>{
        console.log("button was clicked");
        setText(event.target.value); 
    }
    const handledownclick=()=>{
        console.log("uppercase was clicked");
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const [text,setText] = useState('Enter the text here');
    return (
        <>
    <div className='container'>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" onChange={handleonchange} value={text} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handledownclick}>Convert to lowercase</button>
    </div>
    <div className="container my-2">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} time to read </p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
  )

}
