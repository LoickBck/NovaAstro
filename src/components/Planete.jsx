import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom'

function PlanetsExplorer() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const originalPlanetData = [
            { id: 1, name: "Mercure",englishName: "Mercury", image: "https://cnes.fr/sites/default/files/drupal/201511/image/is_mercure-messenger.jpg", },

            { id: 2, name: "Venus",englishName: "Venus", image: "https://cnes.fr/sites/default/files/drupal/201511/image/is_venus-nasa.jpg",},

            { id: 3, name: "Terre",englishName: "Earth", image: "https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/terre-1.png", },

            { id: 4, name: "Mars", image: "https://cnes.fr/sites/default/files/drupal/201607/image/is_mars.jpg", },

            { id: 5, name: "Jupiter", image: "https://blog.cnes.fr/sites/default/files/styles/large/public/drupal/201811/image/je_systemesolaire_jupiter.png?itok=NN4jvZmx",},

            { id: 6, name: "Saturne",englishName: "Saturn", image: "https://img-4.linternaute.com/t-8nfUAHIigqKxuilOuVZ-EzuEg=/1080x/smart/6fcce0f97f9440dcaa893edbd38aa6e2/ccmcms-linternaute/34589040.jpg",},

            { id: 7, name: "Uranus", image: "https://physicsworld.com/wp-content/uploads/2020/12/PIA18182.jpg",  },

            { id: 8, name: "Neptune",englishName: "Neptune", image: "https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2021/09/3-decouvertes-sur-neptune-ses-lunes.jpg",},

            { id: 9, name: "Soleil",englishName: "Sun", image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Solar_prominence_from_STEREO_spacecraft_September_29%2C_2008.jpg",},

        ];

        
        setPlanets(originalPlanetData);
    }, []);

    return (
        <div className="m-16 mt-24">
            <h3 className="text-2xl mb-12">Explorez le Système Solaire</h3>
            <Splide options={{ perPage: 3, arrows: true, pagination: false, drag: 'free', gap: '5rem' }}>
                {planets.map((planet) => (
                    <SplideSlide key={planet.id}>
                        <div className="mt-10 min-h-96 mb-10 hover:scale-110 bg-white border border-gray rounded-lg shadow-xl">
                            <img className="rounded-t-lg w-full h-full object-cover" src={planet.image} alt={planet.name} />
                            <div className="bg-black rounded-b-lg p-5">
                                <h5 className="mb-8 text-2xl font-bold text-center text-gray-200">{planet.name}</h5>
                                    <Link 
                                    className="flex justify-center items-center mx-24 text-sm font-medium text-center bg-transparent hover:bg-indigo-400 text-indigo-400 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-indigo-400 hover:border-transparent" 
                                    to={`/planets/${planet.name}`}
                                    state={{ englishName: planet.englishName, imageUrl: planet.image }}
                                    >
                                    Explorez
                                    <FaArrowRight className="ml-2" />
                                    </Link>
                                </div>
                            </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}

export default PlanetsExplorer;
