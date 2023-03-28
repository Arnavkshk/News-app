import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/notesState';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Routes>
          <Route exact path="/" element={ <Home/>}></Route> 
          <Route exact path="/about" element={<About/>}></Route>
          {/* <Route exact path="/general" element={}></Route>
          <Route exact path="/entertainment" element={}></Route>
          <Route exact path="/sports" element={}></Route>
          <Route exact path="/science" element={}></Route>
          <Route exact path="/health" element={}></Route>
          <Route exact path="/technology" element={}></Route> */}
    </Routes>
    </Router>
    </NoteState>
    
    </>
  );
}

export default App;
