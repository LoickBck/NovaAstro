import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isPlanetsMenuOpen, setIsPlanetsMenuOpen] = useState(false); // État pour le sous-menu des planètes
    const sidebarRef = useRef(null);

    const planets = [
        { name: "Mercure", path: "/planets/Mercure" },
        { name: "Vénus", path: "/planets/Venus" },
        { name: "Terre", path: "/planets/Terre" },
        { name: "Uranus", path: "/planets/Uranus" },
        { name: "Mars", path: "/planets/Mars" },
        { name: "Jupiter", path: "/planets/Jupiter" },
        { name: "Saturne", path: "/planets/Saturne" },
        { name: "Neptune", path: "/planets/Neptune" },
        { name: "Soleil", path: "/planets/Soleil" },
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
        <div className="bg-gray-100">
            <div className="fixed top-0 left-0 w-full z-50 bg-white shadow">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <Link to="/">
                    <h1 className="text-xl font-semibold">Nova Astro</h1>
                    </Link>
                    <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-600 focus:outline-none">
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
                            <button onClick={togglePlanetsMenu} className="block hover:text-indigo-400 w-full text-left">Planètes</button>
                            {isPlanetsMenuOpen && (
                                <ul className="mt-2">
                                    {planets.map((planet, index) => (
                                        <li key={index} className="mb-2">
                                            <Link to={planet.path} className="block hover:text-indigo-400 pl-4">{planet.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li className="mb-3"><Link to="/contact" className="block hover:text-indigo-400">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
