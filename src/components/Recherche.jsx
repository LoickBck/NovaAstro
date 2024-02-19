import React, { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ImSpinner9 } from "react-icons/im";
import '@splidejs/splide/dist/css/splide.min.css';

function Recherche() {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) return;
    setIsLoading(true);

    try {
      const response = await fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(searchTerm)}&media_type=image`);
      const data = await response.json();
      setImages(data.collection.items);
    } catch (error) {
      console.error("Erreur lors de la recherche d'images:", error);
      setImages([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='m-16'>
        <h1 className='text-3xl mb-8'>L'Univers en images</h1>
        <h2 className='text-xl flex flex-row items-center'>Recherchez une gallerie d'images qui proviennent directement de la Nasa ! <p className='text-lg text-gray-700'>(les recherches sont plus pertinentes avec des mots anglais)</p></h2>
    <div className='flex flex-col items-center justify-center p-12'>
      <form onSubmit={handleSearch} className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Galaxie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-md border border-gray-300 bg-white py-2 px-4 text-base font-medium text-gray-700 outline-none focus:border-indigo-500 focus:shadow-outline"
        />
        <button type="submit" className="ml-8 text-sm font-medium text-center bg-transparent hover:bg-indigo-400 text-indigo-400 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-indigo-400 hover:border-transparent">
          Rechercher
        </button>
      </form>
      <div className="w-full">
        {isLoading ? (
          <div className='text-center items-center flex flex-row justify-center p-12'>Chargement des images<ImSpinner9 className="animate-spin text-4xl ml-4" /></div>
        ) : (
          images.length > 0 && (
            <Splide options={{ perPage: 3, arrows: true, pagination: true, drag: 'free', gap: '1rem' }}>
              {images.map((image, index) => (
                <SplideSlide key={index}>
                  <img src={image.links?.[0]?.href} alt={image.data?.[0]?.title} className="w-auto h-[20rem] object-cover overflow-x-hidden'" />
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
