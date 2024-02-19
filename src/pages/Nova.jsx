import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

function Nova() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 1}}
    transition={{duration: 2}}
    >
      <div className="bg-black text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-indigo-400 tracking-loose">Nova Astro</h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2"> Espace : Infiniment grandiose</h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
            Nous sommes une entreprise avant-gardiste dans le domaine de l'astronomie, offrant à ses clients des expériences uniques pour explorer les merveilles de l'univers. Notre mission est de rendre l'espace accessible à tous, en inspirant et en éduquant par le biais de technologies innovantes et d'événements captivants.</p>
            <Link
                to="/"
                className="bg-transparent hover:bg-indigo-400 text-indigo-400 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-indigo-400 hover:border-transparent">
                Explorer</Link>
          </div>
          <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div className="h-48 flex flex-wrap content-center">
              <div>
                <img className="inline-block mt-28 hidden xl:block" src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"></img>
              </div>
              <div>
                <img className="inline-block mt-24 md:mt-0 p-8 md:p-0" src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"></img>
              </div>
              <div>
                <img className="inline-block mt-28 hidden lg:block" src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Nova;
