import React from 'react';
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import {BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id"  />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
