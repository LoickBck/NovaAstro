import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";

function MostLoved() {

    const [mostLoved, setMostLoved] = useState([]);
    
    useEffect(() => {
        getMostLoved();
    },[]);

    const getMostLoved = async () => {
        
        const check = localStorage.getItem('mostLoved');
        // check si le fetch à déjà été fait sinon garde les premières recettes aléatoires

        if (check) {
            setMostLoved(JSON.parse(check));
        }else{
            const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
            // "process.env.REACT_APP_API_KEY" sert à récupérer la clé de l'API dans le .env
            // &number12 sert à définir le nombre de recettes
            const data = await api.json();
            localStorage.setItem('mostLoved', JSON.stringify(data.recipes));
            setMostLoved(data.recipes);
        }

    };

  return (
    <div>
        <div className="m-16">
            <h3 className="text-center text-3xl mb-12">Les recettes plus aimées</h3>
            <Splide 
            options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: 'free',
                gap : '5rem'
            }}>
                {mostLoved.map((recipe) => {
                    return(
                <SplideSlide key={recipe.id}>
                    <div className="mt-10 min-h-92 hover:scale-110 bg-white border border-gray rounded-lg shadow-xl">
                            <img className="rounded-t-lg w-full h-full object-cover" src={recipe.image} alt={recipe.title} />
                        <div className="p-5">
                                <h5 className="mb-8 text-2xl font-bold text-center text-gray-600">{recipe.title}</h5>
                            <div className="flex justify-center items-center mx-12 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                                Voir la recette
                                <FaArrowRight className="ml-2" />
                            </div>
                        </div>
                    </div>
                </SplideSlide>
                
                );
            })}
        </Splide>
        </div>
    </div>
  );
}

export default MostLoved