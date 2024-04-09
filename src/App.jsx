import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import PortfolioDescription from "./components/sub/PortfolioDescription";
import SpinnerFullPage from "./components/SpinnerFullPage";
// pages
import { Suspense, lazy } from "react";
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Service = lazy(() => import("./pages/Service"));
const Blog = lazy(() => import("./pages/Blog"), 4000);
const PageNotFound = lazy(() => import("./pages/404"));

function App() {
  return (
    <Router>
      <Suspense fallback={<SpinnerFullPage />}>
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
      </Suspense>
    </Router>
  );
}

export default App;
