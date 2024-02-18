import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { ImSpinner9 } from "react-icons/im";

// Mapping des noms des planètes du français vers l'anglais
const nameMapping = {
  "Mercure": "Mercury",
  "Vénus": "Venus",
  "Terre": "Earth",
  "Mars": "Mars",
  "Jupiter": "Jupiter",
  "Saturne": "Saturn",
  "Uranus": "Uranus",
  "Neptune": "Neptune",
  "Soleil": "Sun",
};

function PlanetImages({ planetName }) {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null); // État pour gérer les erreurs

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let queryName = nameMapping[planetName] || planetName;
        const response = await fetch(`https://images-api.nasa.gov/search?q=${queryName}&media_type=image`);
        if (!response.ok) {
          throw new Error("L'API ne parvient pas à transmettre l'image");
        }
        const data = await response.json();
        setImages(data.collection.items);
      } catch (err) {
        setError(err.message); // Mise à jour de l'état d'erreur
        console.error(err);
      }
    };

    fetchImages();
  }, [planetName]);

  if (error) {
    return <div className='text-red-500 text-center mt-20'>Erreur : {error}</div>; // Affichage d'un message d'erreur
  }

  if (images.length === 0) {
    return <div className='flex justify-center items-center mx-24 px-3 mt-20 text-xl text-center'>Chargement des images <ImSpinner9 className='animate-spin ml-4' /></div>;
  }

  return (
    <div className='m-16'>
      <Splide options={{ perPage: 3, arrows: true, pagination: false, drag: 'free', gap: '1rem' }}>
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <img className='w-auto h-[20rem] object-cover overflow-x-hidden' src={image.links?.[0]?.href} alt={image.data?.[0]?.title} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default PlanetImages;
