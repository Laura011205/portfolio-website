import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio-website" element={<Home />} />
        <Route path="/portfolio-website/Projects" element={<Projects />} />
        <Route path="/portfolio-website/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
