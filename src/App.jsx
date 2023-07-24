import React from "react";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Home from "./components/Home";
import Blog from "./components/Blog";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/' element={<Home />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
