import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';
import { useState } from 'react';

function App() {
  const[mode,setmode]=useState("light");
  const togglemode=()=>{
    if(mode==="dark"){
    setmode("light");
    document.body.style.backgroundColor="white";
  }
  else{
    setmode("dark");
    document.body.style.backgroundColor="black";
  }
  }
  return (
    <>
    <Navbar title="Navbar" mode={mode} togglemode={togglemode}/>
    <div className="container my-3">
    <Textarea heading="Enter your text here" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}


export default App;
