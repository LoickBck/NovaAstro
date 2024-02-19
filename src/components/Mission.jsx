import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { ImSpinner9 } from "react-icons/im";

function MissionMars() {
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
        <div className='xs:m-4 md:m-16'>
            <h2 className='text-2xl mb-8'>Dernières images de la mission Mars Rover</h2>
            <Splide options={{ 
                perPage: 2, 
                arrows: true, 
                pagination: false, 
                drag: 'free', 
                gap: '1rem',
                breakpoints: {
                    280: { perPage: 1 }, // xs
                    640: { perPage: 1 }, // sm
                    768: { perPage: 1 }, // md
                    1024: { perPage: 2 }, // lg
                    1280: { perPage: 2 }, // xl
                    1536: { perPage: 2 }, // 2xl
                }
            }}>
                {missions.map((mission) => (
                    <SplideSlide key={mission.id}>
                        <div className='m-4'>
                            <img className='w-full h-[28rem] object-cover overflow-x-hidden' src={mission.img_src} alt="Mission spatiale" />
                            <p className='text-center text-gray-200'>{mission.earth_date}</p>
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}

export default MissionMars;
