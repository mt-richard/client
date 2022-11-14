import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Default from "./layout/default";
import Portfolio from "./pages/portifolio";
import Services from "./pages/services";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from './pages/blog';
import Contact from "./pages/contact";
import ErrorPage from './pages/errorpage'

function App() {
  return (
    <BrowserRouter>
      {/* <p className="text-red-400">Wellcome</p> */}
      <Routes>
        
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
