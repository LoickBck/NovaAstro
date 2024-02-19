import React from 'react';
import { MdMailOutline } from "react-icons/md";
import { motion } from 'framer-motion'

function Contact() {
  return (
    <motion.div className='mt-20'
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 1}}
    transition={{duration: 2}}
    >
        <div className='flex flex-row items-center ml-20'>
            <h1 className='flex flex-row items-center xs:-ml-8 sm:ml-8 md:ml-20 text-4xl font-medium'>Contact</h1>
            <MdMailOutline className='ml-4 text-5xl' />
        </div>
        <div className="flex flex-col items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
            <form action="" method="">
            <div className="mb-5">
                <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-indigo-400"
                >
                Nom Complet
                </label>
                <input
                type="text"
                name="name"
                id="name"
                placeholder="Eerling Haaland"
                className="w-full rounded-md border border-gray-300 bg-black py-3 px-6 text-base font-medium text-gray-300 outline-none focus:border-indigo-400 focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-indigo-400"
                >
                Mail
                </label>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="messivoleur@ballondor.com"
                className="w-full rounded-md border border-gray-300 bg-black py-3 px-6 text-base font-medium text-gray-300 outline-none focus:border-indigo-400 focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-indigo-400"
                >
                Objet
                </label>
                <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Objet de la demande"
                className="w-full rounded-md border border-gray-300 bg-black py-3 px-6 text-base font-medium text-gray-300 outline-none focus:border-indigo-400 focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-indigo-400"
                >
                Message
                </label>
                <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Écrivez votre message"
                className="w-full resize-none rounded-md border bg-black border-gray-300 py-3 px-6 text-base font-medium text-gray-300 outline-none focus:border-indigo-400 focus:shadow-md"
                ></textarea>
            </div>
            <div>
                <button
                className="bg-transparent hover:bg-indigo-400 text-indigo-400 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-indigo-400 hover:border-transparent"
                >
                Envoyer
                </button>
            </div>
            </form>
        </div>
        </div>
    </motion.div>
  )
}

export default Contact