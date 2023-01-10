import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
// import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const[mode,setmode]=useState("light");
  const[alert,setalert]=useState(null);

  const showalert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  const togglemode=()=>{
    if(mode==="dark"){
    setmode("light");
    document.body.style.backgroundColor="white";
    showalert("Light mode have been enabled!","success!");
    document.title="Light mode enabled";
  }
  else{
    setmode("dark");
    document.body.style.backgroundColor="black";
    showalert("Dark mode have been enabled!","success!");
    document.title="Light mode enabled";

  }
  }
  return (
    <>
    <Navbar title="Navbar" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Textarea showalert={showalert} heading="Enter your text here" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}


export default App;
