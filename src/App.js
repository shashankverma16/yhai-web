import './App.css';
import AboutSection from './components/AboutSection';
import ImageSlider from './components/ImageSlider';
import Navbar from './components/Navbar';
import ProgramSection from './components/ProgramSection';
import MediaPage from './components/MediaPage';
import MediaDashboard from './components/MediaDashboard';
import ProgramForm from './components/ProgramForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProgramPage from './components/ProgramPage';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import JoinPage from './components/JoinPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <ImageSlider />
            <AboutSection />
            <ProgramSection />
          </>
        } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/add-program" element={<ProgramForm />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/programs" element={<ProgramPage />} />
        <Route path="/media-dashboard" element={<MediaDashboard />} />
        <Route path="/program-details" element={<ProjectDetails />} /> {/* Update to ProgramDetails route */}
        <Route path="/join-us" element={<JoinPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
