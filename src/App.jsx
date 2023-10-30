import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import PortfolioDescription from "./components/sub/PortfolioDescription";
import Service from "./components/Service";
import Blog from "./components/Blog";
import PageNotFound from "./components/404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='About' element={<About />} />
          <Route path='Portfolio' element={<Portfolio />} />
          <Route path='Service' element={<Service />} />
          <Route path='Blog' element={<Blog />} />
          <Route
            path='PortfolioDescription/:id'
            element={<PortfolioDescription />}
          />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
