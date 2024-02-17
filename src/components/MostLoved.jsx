import { useEffect, useState } from "react";

function MostLoved() {

    const [mostLoved, setMostLoved] = useState([]);
    
    useEffect(() => {
        getMostLoved();
    },[]);

    const getMostLoved = async () => {
        const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`)
        // "process.env.REACT_APP_API_KEY" sert à récupérer la clé de l'API dans le .env
        // &number12 sert à définir le nombre de recettes
        const data = await api.json();
        setMostLoved(data.recipes);
    }

  return (
    <div>
        {mostLoved.map((recipe) => {
            return(
                <div key={recipe.id}>
                    <p>{recipe.title}</p>
                </div>
            );
        })}
    </div>
  )
}

export default MostLoved