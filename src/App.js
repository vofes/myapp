import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Impressum from './components/Impressum';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// База
// https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/

// крутая запись на маник
// https://crystal-nails.ru/

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/myapp" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
