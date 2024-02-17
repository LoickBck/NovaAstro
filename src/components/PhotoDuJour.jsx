import React, { useEffect, useState } from 'react';

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

    if (!pdj) return <div>Chargement...</div>;

    return (
        <div className="">
            <h2 className='text-2xl mb-20 ml-10'>Photo du jour</h2>
            <div className='flex justify-center mx-10'>
                <img className='max-w rounded-3xl mb-8' src={pdj.url} alt={pdj.title} />
            </div>
            <p className='mx-12 text-start text-lg'>{pdj.explanation}</p>
        </div>
    );
}

export default PDJ;
