import React from 'react';
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import Item from "./PokeDetail";
import {BrowserRouter, Routes, Route, useParams } from 'react-router-dom';


const App = () => {
  let { img } = useParams();
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/shop/:id" element={<Item />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
