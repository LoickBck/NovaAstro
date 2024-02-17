import Vegan from "../components/Vegan";
import MostLoved from "../components/MostLoved";

import React from 'react'

function Home() {
  return (
    <div>
        <MostLoved />
        <Vegan />
    </div>
    // J'appelle mes composants dans la section Home
  )
}

export default Home