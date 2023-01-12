import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
    <Router>
    <Navbar title="Navbar" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/">
          <Textarea showalert={showalert} heading="Enter your text here" mode={mode}/>
          </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}


export default App;
