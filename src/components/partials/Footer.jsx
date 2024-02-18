import React from 'react'

function Footer() {
  return (
    <div>

        <div className="text-center text-white">

        <div className="mx-6 pt-8 pb-4 text-center">

        <div className="mb-6">
        <h5 className="mb-2 font-bold uppercase text-indigo-400">explorer notre espace</h5>

        <p className="mb-4">
        Embarquez pour l'aventure de votre vie et découvrez des secrets cachés
            merveilleux. Votre voyage commence maintenant !
        </p>
        </div>

        </div>

        <div className="p-6 text-center flex justify-center items-center">

            <span>© 2024 Copyright :</span>

            <a
                className="font-semibold text-yellow-500"
                href="https://buckloick.com"
            >
                Loick Buck
            </a>

        </div>


        </div>
    </div>
  )
}

export default Footer