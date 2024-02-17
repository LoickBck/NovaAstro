import { useParams, useLocation } from 'react-router-dom';
import PlanetImages from '../components/PlanetImages';

function PlanetDetail() {
    // Récupération du nom de la planète de l'URL ou de l'état de navigation
  const params = useParams();
  const location = useLocation();
  const planetName = params.planetName; // Si le nom de la planète est dans l'URL
  const { englishName } = location.state || {}; // Si englishName est passé via l'état de navigation
  
  return (
    <div>
        <h1 className='text-center text-4xl'>{planetName}</h1>
        <h2 className='text-center text-2xl mt-4 mb-12'>Images en rapport avec la planète {planetName}</h2>
        <PlanetImages planetName={englishName} />
    </div>
  );
}

export default PlanetDetail;
