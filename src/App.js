import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './pages/Pages';
import PlanetDetail from './pages/PlaneteDetail'; 
import Contact from './pages/Contact';
import Footer from './components/partials/Footer';
import Navbar from './components/partials/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/planets/:planetName" element={<PlanetDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
