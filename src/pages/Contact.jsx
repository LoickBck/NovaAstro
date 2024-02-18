import React from 'react';
import { MdMailOutline } from "react-icons/md";

function Contact() {
  return (
    <div className='mt-20'>
        <div className='flex flex-row items-center ml-20'>
            <h1 className='flex flex-row items-center ml-20 text-4xl font-medium'>Contact</h1>
            <MdMailOutline className='ml-4 text-5xl' />
        </div>
        <div className="flex flex-col items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
            <form action="" method="">
            <div className="mb-5">
                <label
                for="name"
                className="mb-3 block text-base font-medium text-blue-700"
                >
                Nom Complet
                </label>
                <input
                type="text"
                name="name"
                id="name"
                placeholder="Eerling Haaland"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-300 outline-none focus:border-indigo-400 focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label
                for="email"
                className="mb-3 block text-base font-medium text-blue-700"
                >
                Mail
                </label>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="messivoleur@ballondor.com"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-300 outline-none focus:border-indigo-400 focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label
                for="subject"
                className="mb-3 block text-base font-medium text-blue-700"
                >
                Objet
                </label>
                <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Objet de la demande"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-300 outline-none focus:border-indigo-400 focus:shadow-md"
                />
            </div>
            <div className="mb-5">
                <label
                for="message"
                className="mb-3 block text-base font-medium text-blue-700"
                >
                Message
                </label>
                <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Écrivez votre message"
                className="w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-indigo-400 focus:shadow-md"
                ></textarea>
            </div>
            <div>
                <button
                className="hover:shadow-form rounded-md bg-indigo-400 py-3 px-8 text-base font-semibold text-white outline-none"
                >
                Envoyer
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Contact