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
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" onChange={handleonchange} value={text} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleupclick}>Convert to uppercase</button>
    <button className="btn btn-primary" onClick={handledownclick}>Convert to lowercase</button>
    </div>
  )

}
