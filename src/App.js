import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlanetDetail from './pages/PlaneteDetail'; 
import Contact from './pages/Contact';
import Nova from './pages/Nova';
import Footer from './components/partials/Footer';
import Navbar from './components/partials/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets/:planetName" element={<PlanetDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nova" element={<Nova />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
