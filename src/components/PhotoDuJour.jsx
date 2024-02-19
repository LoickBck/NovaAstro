import React, { useEffect, useState } from 'react';
import { ImSpinner9 } from "react-icons/im";

function PDJ() {
    const [pdj, setPdj] = useState(null);

    useEffect(() => {
        const fetchPDJ = async () => {
            const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
            setPdj(data);
        };

        fetchPDJ();
    }, []);

    if (!pdj) return <div className='text-center text-3xl mt-10 ' >Chargement de la photo du jour...<ImSpinner9 className='animate-spin ml-4' /></div>;

    return (
        <div className='pt-8'>
        <div className="xs:m-4 md:m-16">
            <h2 className='text-2xl mb-10 '>Photo du jour</h2>
            <p className='xs:text-md midxs:text-lg font-medium text-center '>Chaque jour, l'univers nous révèle une nouvelle merveille : découvrez la beauté et l'immensité cosmique à travers la Photo du Jour de la NASA, une fenêtre ouverte sur les mystères de l'espace.</p>
            <div className='flex justify-center mt-10 mx-10'>
                <img className='max-w rounded-3xl mb-8 ' src={pdj.url} alt={pdj.title} />
            </div>
            <p className='xs:mx-4 sm:mx-12 text-start xs:text-md midxs:text-lg pb-8'>{pdj.explanation}</p>
        </div>
        </div>
    );
}

export default PDJ;
