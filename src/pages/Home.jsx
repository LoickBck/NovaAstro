import Planete from "../components/Planete";
import PhotoDuJour from "../components/PhotoDuJour";
import Mission from "../components/Mission";
import React from 'react'

function Home() {
  return (
    <div>
        <Planete />
        <PhotoDuJour />
        <Mission />
    </div>
    // J'appelle mes composants dans la section Home
  )
}

export default Home