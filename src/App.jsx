import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortfolioDescription from "./components/sub/PortfolioDescription";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Home from "./components/Home";
import Blog from "./components/Blog";

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
        <Route
          path='/PortfolioDescription/:id'
          element={<PortfolioDescription />}
        />
      </Routes>
    </Router>
  );
}

export default App;
