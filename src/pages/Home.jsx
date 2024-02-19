import Planete from "../components/Planete";
import PhotoDuJour from "../components/PhotoDuJour";
import Mission from "../components/Mission";
import Recherche from "../components/Recherche";
import React from 'react'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 1}}
    transition={{duration: 2}}
    >
        <Planete />
        <Recherche />
        <PhotoDuJour />
        <Mission />
    </motion.div>
    // J'appelle mes composants dans la section Home
  )
}

export default Home