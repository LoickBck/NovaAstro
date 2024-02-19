import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PlanetImages from '../components/PlanetImages';
import { getPlanetFacts } from '../components/Facts';
import { motion } from 'framer-motion'

function PlanetDetail() {
    // Récupération du nom de la planète de l'URL ou de l'état de navigation
    const params = useParams();
    const location = useLocation();
    const planetName = params.planetName; // Si le nom de la planète est dans l'URL
    const { englishName , imageUrl } = location.state || {};
    
    //getPlanetFacts pour récupérer les informations de la planète
    const { description, funFacts } = getPlanetFacts(planetName);

    return (
        <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 1}}
        transition={{duration: 2}}
        >
            <h1 className='text-center text-4xl mt-20'>{planetName}</h1>
            <div className="flex justify-center my-4">
                <img src={imageUrl} alt={`Planete :  ${planetName}`} className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" />
            </div>
            <p className='text-center text-lg mt-4 mx-64'>{description}</p>
            <div className="flex flex-col items-center mt-12">
                <div className="w-full max-w-5xl">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className="px-5 py-3 border-b-2 border-gray-900 bg-gray-900 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
                                    Faits Intéressants
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {funFacts.map((fact, index) => (
                                <tr key={index}>
                                    <td className="px-5 py-2 border border-gray-800 text-sm">
                                        {fact}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <h2 className='text-center text-2xl mt-8 mb-12'>Images en rapport avec la planète {planetName}</h2>
            <PlanetImages planetName={englishName || planetName} />
        </motion.div>
    );
}

export default PlanetDetail;
