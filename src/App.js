import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/courses' element={<Courses />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>

     
    </div>
  );
}

export default App;