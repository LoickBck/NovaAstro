import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PlanetImages from '../components/PlanetImages';
import { getPlanetFacts } from '../components/Facts'; // Ajustez le chemin d'importation

function PlanetDetail() {
    // Récupération du nom de la planète de l'URL ou de l'état de navigation
    const params = useParams();
    const location = useLocation();
    const planetName = params.planetName; // Si le nom de la planète est dans l'URL
    const { englishName } = location.state || {}; // Si englishName est passé via l'état de navigation
    
    // Utilisez getPlanetFacts pour récupérer les informations de la planète
    const { description, funFacts } = getPlanetFacts(planetName);

    return (
        <div>
            <h1 className='text-center text-4xl'>{planetName}</h1>
            <p className='text-center text-lg mt-4 mx-10'>{description}</p>
            <h2 className='text-center text-2xl mt-4'>Faits intéressants :</h2>
            <ul className='list-disc mx-auto mt-4 mb-12 max-w-[500px]'>
                {funFacts.map((fact, index) => (
                    <li key={index} className='mt-2'>{fact}</li>
                ))}
            </ul>
            <h2 className='text-center text-2xl mt-4 mb-12'>Images en rapport avec la planète {planetName}</h2>
            <PlanetImages planetName={englishName || planetName} />
        </div>
    );
}

export default PlanetDetail;
