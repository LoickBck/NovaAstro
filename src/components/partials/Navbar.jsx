import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSpaceShuttle } from "react-icons/fa";
import { IoMdPlanet } from "react-icons/io";

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isPlanetsMenuOpen, setIsPlanetsMenuOpen] = useState(false); // État pour le sous-menu des planètes
    const sidebarRef = useRef(null);

    const planets = [
        { name: "Mercure", path: "/planets/Mercure",image: "https://cnes.fr/sites/default/files/drupal/201511/image/is_mercure-messenger.jpg" },
        { name: "Vénus", path: "/planets/Venus",image: "https://cnes.fr/sites/default/files/drupal/201511/image/is_venus-nasa.jpg" },
        { name: "Terre", path: "/planets/Terre",image: "https://www.asc-csa.gc.ca/images/astronomie/systeme-solaire/terre-1.png" },
        { name: "Uranus", path: "/planets/Uranus", image: "https://physicsworld.com/wp-content/uploads/2020/12/PIA18182.jpg" },
        { name: "Mars", path: "/planets/Mars", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mars_Valles_Marineris_EDIT.jpg/1200px-Mars_Valles_Marineris_EDIT.jpg" },
        { name: "Jupiter", path: "/planets/Jupiter", image: "https://blog.cnes.fr/sites/default/files/styles/large/public/drupal/201811/image/je_systemesolaire_jupiter.png?itok=NN4jvZmx" },
        { name: "Saturne", path: "/planets/Saturne", image: "https://pop.h-cdn.co/assets/17/38/1600x1600/square-1505749836-cassini-header.jpg" },
        { name: "Neptune", path: "/planets/Neptune", image: "https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2021/09/3-decouvertes-sur-neptune-ses-lunes.jpg" },
        { name: "Soleil", path: "/planets/Soleil", image: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001517/GSFC_20171208_Archive_e001517~thumb.jpg" },
    ];

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const togglePlanetsMenu = () => setIsPlanetsMenuOpen(!isPlanetsMenuOpen); // Basculer l'affichage du sous-menu

    const closeSidebarIfOutsideClick = (e) => {
        if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
            setIsSidebarOpen(false);
            setIsPlanetsMenuOpen(false); // Fermer également le sous-menu
        }
    };

    // Fonction pour gérer le clic sur les liens
    const handleLinkClick = () => {
        setIsSidebarOpen(false); // Ferme la sidebar
        setIsPlanetsMenuOpen(false); // Ferme le sous-menu des planètes, si nécessaire
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
                    <Link to="/" className='flex flex-row items-center'>
                        <h1 className="text-xl font-semibold text-white">Nova Astro</h1>
                        <IoMdPlanet className='text-2xl ml-2' />
                    </Link>
                    <div className="relative">
                <button onClick={toggleSidebar} className="z-50 focus:outline-none">
                    <div className="relative w-10 h-6 flex flex-col justify-between items-center mx-auto">
                        {/* Barre du haut */}
                        <div className={`h-1 w-[80%] bg-white transform transition duration-500 ease-in-out ${isSidebarOpen ? "rotate-45 translate-y-2.5" : "-translate-y-0.5"}`}></div>
                        {/* Barre du milieu */}
                        <div className={`h-1 w-[80%] bg-white transform transition duration-500 ease-in-out ${isSidebarOpen ? "opacity-0" : "opacity-100"}`}></div>
                        {/* Barre du bas */}
                        <div className={`h-1 w-[80%] bg-white transform transition duration-500 ease-in-out ${isSidebarOpen ? "-rotate-45 -translate-y-2.5" : "translate-y-0.5"}`}></div>
                    </div>
                </button>
                    </div>
                </div>
            </div>

            <div className={`fixed top-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out bg-gray-700 text-white w-56 min-h-screen overflow-y-auto z-50`} ref={sidebarRef}>
                <div className="p-5">
                    <h2 className="text-2xl font-semibold flex flex-row items-center">Nova <IoMdPlanet className='text-3xl mx-2' /> - Menu</h2>
                    <ul className="mt-6">
                        <li className="mb-3"><Link onClick={handleLinkClick} to="/" className="block hover:text-indigo-400">Home</Link></li>
                        <li className="mb-3">
                            <div className='flex flex-row hover:text-indigo-400 w-full text-left items-center'>
                            <button onClick={togglePlanetsMenu} className="block">Planètes</button>
                            <FaSpaceShuttle className='ml-2' />
                            </div>
                            {isPlanetsMenuOpen && (
                                <ul className="mt-2">
                                    {planets.map((planet, index) => (
                                        <li key={index} className="mb-2">
                                            <Link onClick={handleLinkClick} state={{imageUrl: planet.image }} to={planet.path} className="block hover:text-indigo-400 pl-4">{planet.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li className="mb-3"><Link onClick={handleLinkClick} to="/nova" className="block hover:text-indigo-400">Nova</Link></li>
                        <li className="mb-3"><Link onClick={handleLinkClick} to="/contact" className="block hover:text-indigo-400">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
