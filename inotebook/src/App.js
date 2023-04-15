import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';
import Login from './components/Login';
import Signup from './components/Signup';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Alerts from './components/Alerts';

function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Alerts message={"this is alert of inotebook"}/>
    <div className="container">
    <Routes>
          <Route exact path="/" element={ <Home/>}></Route> 
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
          {/* <Route exact path="/general" element={}></Route>
          <Route exact path="/science" element={}></Route>
          <Route exact path="/health" element={}></Route>
          <Route exact path="/technology" element={}></Route> */}
    </Routes>
    </div>
    </Router>
    </NoteState>
    
    </>
  );
}

export default App;