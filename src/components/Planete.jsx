import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from 'react-router-dom'

function PlanetsExplorer() {
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        const originalPlanetData = [
            { id: 1, name: "Mercure",englishName: "Mercury", image: "https://cnes.fr/sites/default/files/drupal/201511/image/is_mercure-messenger.jpg", description: "Mercure est la planète la plus proche du Soleil. Sa surface est criblée de cratères dus aux impacts de comètes et d'astéroïdes." },
            { id: 2, name: "Vénus",englishName: "Venus", image: "https://cnes.fr/sites/default/files/drupal/201511/image/is_venus-nasa.jpg", description: "Vénus est la deuxième planète du système solaire et est connue pour sa température de surface extrêmement élevée et son atmosphère riche en dioxyde de carbone." },
            { id: 3, name: "Terre",englishName: "Earth", image: "https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/terre-1.png", description: "Notre planète natale, la Terre, est la troisième planète du Soleil et la seule connue pour abriter la vie." },
            { id: 4, name: "Mars", image: "https://cnes.fr/sites/default/files/drupal/201607/image/is_mars.jpg", description: "Mars, souvent surnommée la planète rouge, est célèbre pour ses tempêtes de poussière et pour être la cible principale de la recherche de signes de vie passée." },
            { id: 5, name: "Jupiter", image: "https://blog.cnes.fr/sites/default/files/styles/large/public/drupal/201811/image/je_systemesolaire_jupiter.png?itok=NN4jvZmx", description: "Jupiter est la plus grande planète du système solaire. Sa Grande Tache Rouge est une tempête plus grande que la Terre." },
            { id: 6, name: "Saturne",englishName: "Saturn", image: "https://img-4.linternaute.com/t-8nfUAHIigqKxuilOuVZ-EzuEg=/1080x/smart/6fcce0f97f9440dcaa893edbd38aa6e2/ccmcms-linternaute/34589040.jpg", description: "Saturne est connue pour son système de anneaux magnifiques, composés principalement de glace." },
            { id: 7, name: "Uranus", image: "https://physicsworld.com/wp-content/uploads/2020/12/PIA18182.jpg", description: "Uranus a une couleur bleu-vert due à l'atmosphère riche en méthane, et est unique pour son inclinaison extrême." },
            { id: 8, name: "Neptune",englishName: "Neptune", image: "https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2021/09/3-decouvertes-sur-neptune-ses-lunes.jpg", description: "Neptune est connue pour ses vents extrêmement rapides et a été la première planète localisée à travers des prédictions mathématiques." },
            { id: 9, name: "Soleil",englishName: "Sun", image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Solar_prominence_from_STEREO_spacecraft_September_29%2C_2008.jpg", description: "Le Soleil est l'étoile au centre de notre système solaire, une gigantesque sphère de gaz brûlant principalement composée d'hydrogène et d'hélium." },
        ];

        
        setPlanets(originalPlanetData);
    }, []);

    return (
        <div className="m-16">
            <h3 className="text-2xl mb-12">Explorez le Système Solaire</h3>
            <Splide options={{ perPage: 3, arrows: false, pagination: false, drag: 'free', gap: '5rem' }}>
                {planets.map((planet) => (
                    <SplideSlide key={planet.id}>
                        <div className="mt-10 min-h-96 mb-10 hover:scale-110 bg-white border border-gray rounded-lg shadow-xl">
                            <img className="rounded-t-lg w-full h-full object-cover" src={planet.image} alt={planet.name} />
                            <div className="p-5">
                                <h5 className="mb-8 text-2xl font-bold text-center text-gray-600">{planet.name}</h5>
                                    <Link 
                                    className="flex justify-center items-center mx-24 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" 
                                    to={`/planets/${planet.name}`}
                                    state={{ englishName: planet.englishName }}
                                    >
                                    Explorez
                                    <FaArrowRight className="ml-2" />
                                    </Link>
                                    {/* J'ai du mettre un state planet.englishName car avec les noms en français les requêtes vers l'api n'étaient pas toutes correctes (exemple pour soleil je n'avais pas de photo) */}
                                </div>
                            </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
}

export default PlanetsExplorer;
