import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function PlanetsExplorer() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const originalPlanetData = [
            { id: 1, name: "Mercure",englishName: "Mercury", image: "https://cnes.fr/sites/default/files/drupal/201511/image/is_mercure-messenger.jpg",},

            { id: 2, name: "Venus",englishName: "Venus", image: "https://cnes.fr/sites/default/files/drupal/201511/image/is_venus-nasa.jpg",},

            { id: 3, name: "Terre",englishName: "Earth", image: "https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/terre-1.png", },

            { id: 4, name: "Mars", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mars_Valles_Marineris_EDIT.jpg/1200px-Mars_Valles_Marineris_EDIT.jpg",},

            { id: 5, name: "Jupiter", image: "https://blog.cnes.fr/sites/default/files/styles/large/public/drupal/201811/image/je_systemesolaire_jupiter.png?itok=NN4jvZmx",},

            { id: 6, name: "Saturne",englishName: "Saturn", image: "https://pop.h-cdn.co/assets/17/38/1600x1600/square-1505749836-cassini-header.jpg",},

            { id: 7, name: "Uranus", image: "https://physicsworld.com/wp-content/uploads/2020/12/PIA18182.jpg",  },

            { id: 8, name: "Neptune",englishName: "Neptune", image: "https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2021/09/3-decouvertes-sur-neptune-ses-lunes.jpg",},

            { id: 9, name: "Soleil",englishName: "Sun", image: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001517/GSFC_20171208_Archive_e001517~thumb.jpg",},

        ];

        
        setPlanets(originalPlanetData);
    }, []);

    return (
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        className="xs:m-4 md:m-16 xs:mt-24">
            <h3 className="text-2xl mb-12">Explorez le Système Solaire</h3>
            <Splide options={{ 
                perPage: 3, 
                arrows: true, 
                pagination: false, 
                drag: 'free', 
                gap: '5rem',
                breakpoints: {
                    280: { perPage: 1 }, // xs
                    640: { perPage: 1 }, // sm
                    768: { perPage: 1 }, // md
                    1024: { perPage: 2 }, // lg
                    1280: { perPage: 3 }, // xl
                    1536: { perPage: 3 }, // 2xl
                }
            }}>
                {planets.map((planet) => (
                    <SplideSlide key={planet.id}>
                        <div className="mt-10 min-h-96 mb-10 xs:hover:scale-100 lg:hover:scale-110 border border-indigo-400 rounded-lg shadow-xl">
                            <img className="rounded-t-lg w-full h-full object-cover" src={planet.image} alt={planet.name} />
                            <div className="bg-black rounded-b-lg p-5">
                                <h5 className="mb-8 text-2xl font-bold text-center text-gray-200">{planet.name}</h5>
                                    <Link 
                                    className="flex justify-center xs:mx-4 md:mx-10 xl:mx-16 lg:mx-12 items-center text-sm font-medium text-center bg-transparent hover:bg-indigo-400 text-indigo-400 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-indigo-400 hover:border-transparent" 
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
        </motion.div>
    );
}

export default PlanetsExplorer;
