import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutME from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

import Navbar from "./components/Navabar"

function App() {
  
  return (
    <div>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about_me" element={<AboutME />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
