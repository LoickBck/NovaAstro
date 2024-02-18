import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { ImSpinner9 } from "react-icons/im";

function MissionsSpaciales() {
    const [missions, setMissions] = useState([]);

    useEffect(() => {
        const fetchMissionsData = async () => {
            const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/latest_photos?api_key=${process.env.REACT_APP_API_KEY}`);
            const data = await response.json();
            setMissions(data.latest_photos);
        };

        fetchMissionsData();
    }, []);

    if (!missions.length) return <div className='text-center text-2xl mt-10'>Chargement des données de mission...<ImSpinner9 className='animate-spin ml-4' /></div>;

    return (
        <div className='m-16'>
            <h2 className='text-2xl mb-8'>Dernières images de la mission Mars Rovers</h2>
            <Splide options={{ perPage: 2,arrows: false, pagination: false, drag: 'free', rewind: true, width: '100%', }}>
                {missions.map((mission) => (
                    <SplideSlide key={mission.id}>
                        <div className='m-4'>
                            <img className='w-full max-h-[20rem] object-cover overflow-x-hidden' src={mission.img_src} alt="Mission spatiale" />
                            <p className='text-center text-gray-800'>{mission.earth_date}</p>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}

export default MissionsSpaciales;
