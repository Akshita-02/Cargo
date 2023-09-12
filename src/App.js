import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quotation from "./pages/quotation/Quotation";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <>
        {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
