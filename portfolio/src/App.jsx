import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import AboutME from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Test from './pages/TestPage';

import Navbar from "./components/Navabar"
import ProjectDescription from './pages/ProjectDescription';

function App() {
  
  return (
    <div>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/test_page" element={<Test />}/>

          {/* Dynamic project description route */}
          <Route path="/projects/:projectId" element={<ProjectDescription />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
