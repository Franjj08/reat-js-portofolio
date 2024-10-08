import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navabar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navabar/>
          <Routes>
            <Route path='/' element={<Home/>}>
            </Route>
            <Route path='*' element={<div>404 Not Found</div>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
