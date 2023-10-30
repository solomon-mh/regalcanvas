import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import PortfolioDescription from "./components/sub/PortfolioDescription";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/404";

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
