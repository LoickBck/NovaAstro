import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSpaceShuttle } from "react-icons/fa";

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isPlanetsMenuOpen, setIsPlanetsMenuOpen] = useState(false); // État pour le sous-menu des planètes
    const sidebarRef = useRef(null);

    const planets = [
        { name: "Mercure", path: "/planets/Mercure",image: "https://cnes.fr/sites/default/files/drupal/201511/image/is_mercure-messenger.jpg" },
        { name: "Vénus", path: "/planets/Venus",image: "https://cnes.fr/sites/default/files/drupal/201511/image/is_venus-nasa.jpg" },
        { name: "Terre", path: "/planets/Terre",image: "https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/terre-1.png" },
        { name: "Uranus", path: "/planets/Uranus", image: "https://physicsworld.com/wp-content/uploads/2020/12/PIA18182.jpg" },
        { name: "Mars", path: "/planets/Mars", image: "https://cnes.fr/sites/default/files/drupal/201607/image/is_mars.jpg" },
        { name: "Jupiter", path: "/planets/Jupiter", image: "https://blog.cnes.fr/sites/default/files/styles/large/public/drupal/201811/image/je_systemesolaire_jupiter.png?itok=NN4jvZmx" },
        { name: "Saturne", path: "/planets/Saturne", image: "https://img-4.linternaute.com/t-8nfUAHIigqKxuilOuVZ-EzuEg=/1080x/smart/6fcce0f97f9440dcaa893edbd38aa6e2/ccmcms-linternaute/34589040.jpg" },
        { name: "Neptune", path: "/planets/Neptune", image: "https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2021/09/3-decouvertes-sur-neptune-ses-lunes.jpg" },
        { name: "Soleil", path: "/planets/Soleil", image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Solar_prominence_from_STEREO_spacecraft_September_29%2C_2008.jpg" },
    ];

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const togglePlanetsMenu = () => setIsPlanetsMenuOpen(!isPlanetsMenuOpen); // Basculer l'affichage du sous-menu

    const closeSidebarIfOutsideClick = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
            setIsPlanetsMenuOpen(false); // Fermer également le sous-menu
        }
    };

    useEffect(() => {
        const handler = () => {
            if (!isSidebarOpen) {
                document.addEventListener('click', closeSidebarIfOutsideClick);
            } else {
                document.removeEventListener('click', closeSidebarIfOutsideClick);
            }
        };
    
        handler();
    
        return () => {
            document.removeEventListener('click', closeSidebarIfOutsideClick);
        };
    }, [isSidebarOpen]); // Assurez-vous que l'effet se re-déclenche lorsque isSidebarOpen change
    

    return (
        <div className="bg-white">
            <div className="fixed top-0 left-0 w-full z-50 bg-black shadow">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <Link to="/">
                    <h1 className="text-xl font-semibold">Nova Astro</h1>
                    </Link>
                    <button onClick={toggleSidebar} className="text-indigo-400 hover:text-indigo-200 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <div className={`fixed top-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gray-800 text-white w-56 min-h-screen overflow-y-auto z-50`} ref={sidebarRef}>
                <div className="p-5">
                    <h2 className="text-2xl font-semibold">Nova - Menu</h2>
                    <ul className="mt-6">
                        <li className="mb-3"><Link to="/" className="block hover:text-indigo-400">Home</Link></li>
                        <li className="mb-3">
                            <div className='flex flex-row hover:text-indigo-400 w-full text-left items-center'>
                            <button onClick={togglePlanetsMenu} className="block">Planètes</button>
                            <FaSpaceShuttle className='ml-2' />
                            </div>
                            {isPlanetsMenuOpen && (
                                <ul className="mt-2">
                                    {planets.map((planet, index) => (
                                        <li key={index} className="mb-2">
                                            <Link state={{imageUrl: planet.image }} to={planet.path} className="block hover:text-indigo-400 pl-4">{planet.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li className="mb-3"><Link to="/nova" className="block hover:text-indigo-400">Nova</Link></li>
                        <li className="mb-3"><Link to="/contact" className="block hover:text-indigo-400">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
