import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide'; // Carousel
import { ImSpinner9 } from "react-icons/im"; // Icone chargement 
import '@splidejs/splide/dist/css/splide.min.css';

function Recherche() {
    // Utilise useState pour gérer l'état local du terme de recherche, des images et de l'indicateur de chargement
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    // Gère la soumission du formulaire de recherche
  const handleSearch = async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    if (!searchTerm.trim()) return;// Ignore la recherche si le champ est vide
    setIsLoading(true); // Indique le début du chargement

    try {
      // Encode le terme de recherche pour l'URL et lance la requête à l'API de la NASA
      const response = await fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(searchTerm)}&media_type=image`);
      const data = await response.json();// converti réponse en json
      setImages(data.collection.items);// Met à jour l'état avec les images trouvées
    } catch (error) {
      console.error("Erreur lors de la recherche d'images:", error);
      setImages([]);// réinitialise l'état des images en cas d'erreur
    } finally {
      setIsLoading(false);// indique la fin du chargement
    }
  };

  return (
    <div className='xs:m-4 md:m-16'>
        <h1 className='text-2xl mb-8'>L'Univers en images</h1>
        <h2 className='text-lg'>Recherchez une gallerie d'images qui proviennent directement de la Nasa ! </h2>
        <p className='text-md text-gray-400'>(les recherches sont plus pertinentes avec des mots anglais)</p>
    <div className='flex flex-col items-center justify-center xs:mt-8 lg:mt-0 xs:-p-4 lg:p-12'>
      <form onSubmit={handleSearch} className="flex midxs:flex-row xs:flex-col justify-center mb-10">
        <input
          type="text"
          placeholder="Galaxie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-md border border-indigo-400 bg-white max-h-10 py-2 px-4 text-base font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-outline"
        />
        <button type="submit" className="xs:mt-4 midxs:mt-0 midxs:ml-8 text-sm font-medium text-center bg-transparent hover:bg-indigo-400 text-indigo-400 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-indigo-400 hover:border-transparent">
          Rechercher
        </button>
      </form>
      <div className="w-full">
        {isLoading ? (
          <div className='text-center items-center flex flex-row justify-center p-12'>Chargement des images<ImSpinner9 className="animate-spin text-4xl ml-4" /></div>
        ) : (
          images.length > 0 && (
            <Splide options={{ 
                perPage: 3, 
                arrows: true, 
                pagination: false, 
                drag: 'free', 
                gap: '1rem',
                breakpoints: {
                    280: { perPage: 1 }, // xs
                    640: { perPage: 1 }, // sm
                    768: { perPage: 1 }, // md
                    1024: { perPage: 2 }, // lg
                    1280: { perPage: 3 }, // xl
                    1536: { perPage: 3 }, // 2xl
                }
            }}>
              {images.map((image, index) => (
                <SplideSlide key={index}>
                  <img src={image.links?.[0]?.href} alt={image.data?.[0]?.title} className="w-full h-[20rem] object-cover overflow-x-hidden'" />
                </SplideSlide>
              ))}
            </Splide>
          )
        )}
      </div>
    </div>
    </div>
  );
}

export default Recherche;
