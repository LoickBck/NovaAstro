import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './pages/Pages'; // Votre composant existant
import PlanetDetail from './pages/PlaneteDetail'; // Un nouveau composant pour les détails des planètes

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/planets/:planetName" element={<PlanetDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
