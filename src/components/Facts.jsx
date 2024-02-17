import React from 'react';

const planetFacts = {
    Mercure: {
        description: "Mercure est la sentinelle du système solaire, orbitant le plus près du Soleil. Cette proximité solaire confère à Mercure des températures diurnes extrêmes, tandis que son absence d'atmosphère significative permet une chute drastique de la température la nuit. La surface de Mercure est criblée de cratères similaires à ceux de la Lune, témoignant de son histoire géologique violente. Malgré sa petite taille, Mercure cache des mystères, comme la présence de glace d'eau dans ses cratères polaires, défiant les attentes dans un environnement si proche du Soleil.",
        funFacts: [
          "Mercure effectue une révolution autour du Soleil en seulement 88 jours terrestres.",
          "La température sur Mercure peut atteindre jusqu'à 430°C le jour, et plonger à -180°C la nuit.",
          "Mercure possède un champ magnétique, ce qui est inhabituel pour une petite planète."
        ]
      },
      Vénus: {
        description: "Vénus, surnommée l'étoile du berger, brille le plus brillamment dans notre ciel nocturne après la Lune, grâce à son épaisse couverture nuageuse réfléchissante. Sous cette beauté se cache cependant un monde de conditions extrêmes, avec une pression atmosphérique écrasante et la température de surface la plus élevée du système solaire. Les montagnes et les plaines de lave racontent l'histoire géologique tumultueuse de Vénus, tandis que les récentes découvertes suggèrent que Vénus aurait pu abriter de l'eau liquide et, par extension, des conditions propices à la vie dans son passé lointain.",
        funFacts: [
          "Une journée sur Vénus est plus longue qu'une année vénusienne.",
          "Vénus tourne dans la direction opposée à celle de la Terre et de la plupart des autres planètes.",
          "La pression atmosphérique sur Vénus est 92 fois plus élevée que celle de la Terre."
        ]
      },
      Terre: {
        description: "Notre foyer, la Terre, est le seul monde connu à abriter la vie, un joyau bleu et vert suspendu dans le vide spatial. Sa biosphère riche repose sur un équilibre délicat, rendu possible par son atmosphère protectrice et le cycle de l'eau. La Terre bénéficie d'une diversité de paysages allant des déserts arides aux forêts pluviales luxuriantes, soutenant une incroyable diversité de la vie. Les activités humaines remodelent cependant rapidement ses paysages et son climat, mettant en lumière l'interconnexion de tous les êtres vivants.",
        funFacts: [
          "La Terre est la seule planète du système solaire à ne pas être nommée d'après une divinité romaine ou grecque.",
          "Environ 71% de la surface terrestre est couverte par l'eau.",
          "La Terre a un champ magnétique puissant, ce qui protège la planète contre les effets nocifs des vents solaires."
        ]
      },
      Mars: {
        description: "Mars, la planète rouge, est le monde le plus scruté du système solaire après la Terre, avec des missions robotiques révélant un paysage à la fois étranger et étrangement familier. Ses calottes glaciaires, ses canyons gigantesques et ses anciens lits de rivières asséchés suggèrent que Mars était autrefois bien plus chaude et humide qu'elle ne l'est aujourd'hui. Cette évolution climatique dramatique pose la question captivante de la vie martienne passée et guide les efforts actuels pour explorer cette planète fascinante.",
        funFacts: [
          "Mars abrite le volcan le plus haut et le plus large du système solaire, l'Olympus Mons.",
          "Des preuves d'anciens cours d'eau ont été découverts sur Mars, suggérant la présence passée d'eau liquide.",
          "Mars a deux lunes, Phobos et Deimos, qui sont pensées être des astéroïdes capturés."
        ]
      },
      Jupiter: {
        description: "Jupiter, le géant gazier, règne sur le système solaire avec sa masse colossale influençant les orbites des autres corps célestes. Son atmosphère tourmentée est le théâtre de phénomènes météorologiques extrêmes, dont la Grande Tache Rouge, une tempête plus grande que la Terre. Les lunes de Jupiter, notamment Europa, Ganymède, et Callisto, sont des mondes à part entière, abritant des océans sous-terraines et offrant des perspectives prometteuses pour la recherche de vie extraterrestre.",
        funFacts: [
          "Jupiter a le plus grand nombre de lunes connues de toutes les planètes du système solaire.",
          "La rotation de Jupiter est la plus rapide du système solaire, avec une journée durant seulement environ 10 heures terrestres.",
          "La Grande Tache Rouge est une tempête géante qui fait rage depuis au moins 400 ans."
        ]
      },
      Saturne: {
        description: "Saturne est admirée pour ses anneaux spectaculaires, un système complexe composé de milliards de particules de glace qui orbitent dans une danse cosmique. Les lunes de Saturne, de la mystérieuse Titan avec son atmosphère dense et ses lacs d'hydrocarbures liquides, à la glacée Encelade expulsant des jets d'eau dans l'espace, enrichissent encore le tableau de ce système planétaire captivant. La beauté et la complexité de Saturne continuent de fasciner les astronomes et le grand public.",
        funFacts: [
          "Les anneaux de Saturne sont les plus grands et les plus lumineux du système solaire.",
          "Saturne est si légère par rapport à son volume que si on avait une baignoire assez grande, elle flotterait.",
          "Saturne a 82 lunes connues, Titan étant la plus grande qui dépasse même la taille de la planète Mercure."
        ]
      },
      Uranus: {
        description: "Uranus se distingue dans le système solaire par son inclinaison axiale extrême, qui fait qu'elle orbite autour du Soleil sur son côté. Cette caractéristique unique entraîne des saisons extrêmes qui durent chacune plus de vingt ans terrestres. Uranus est enveloppée dans une atmosphère de méthane, qui lui confère sa teinte bleu-vert caractéristique, masquant un intérieur de glaces et de roches. Moins connue que ses cousins géants gazeux, Uranus cache cependant de nombreux secrets, comme son système d'anneaux subtils et ses nombreuses lunes intrigantes, dont certaines présentent des caractéristiques géologiques surprenantes. Les observations récentes suggèrent que des phénomènes dynamiques et peut-être même des océans intérieurs d'eau liquide pourraient exister sous sa surface glacée, offrant de nouvelles perspectives sur ce monde lointain souvent éclipsé par ses voisins plus flamboyants.",
        funFacts: [
          "Uranus est souvent appelée la 'planète renversée' en raison de son axe de rotation incliné de presque 90 degrés.",
          "Elle a un système d'anneaux, bien moins visible que celui de Saturne.",
          "Uranus a été la première planète découverte avec un télescope en 1781."
        ]
      },
      Neptune: {
        description: "Neptune est connue pour ses vents extrêmement rapides, certains des plus rapides du système solaire.",
        funFacts: [
          "Neptune a été la première planète localisée à travers des prédictions mathématiques plutôt que par observation directe.",
          "Elle possède 14 lunes connues, Triton étant la plus grande et la seule grande lune du système solaire à avoir une orbite rétrograde.",
          "Les vents sur Neptune peuvent atteindre des vitesses supérieures à 2 000 kilomètres par heure."
        ]
      },
      Soleil: {
        description: "Le Soleil est l'étoile au centre de notre système solaire, une gigantesque sphère de gaz brûlant principalement composée d'hydrogène et d'hélium.",
        funFacts: [
          "Le Soleil contient 99,86% de la masse totale du système solaire.",
          "Il mesure environ 109 fois le diamètre de la Terre et environ un million de Terres pourraient tenir à l'intérieur du Soleil.",
          "Le Soleil voyage à travers la galaxie de la Voie lactée, emportant avec lui notre système solaire."
        ]
      }
};

// Exportez une fonction pour obtenir les faits d'une planète spécifique
export function getPlanetFacts(planetName) {
    const data = planetFacts[planetName];
    if (!data) {
      return {
        description: "Aucune description disponible.",
        funFacts: ["Aucun fait amusant disponible."]
      };
    }
    return data;
  }
  
    

function DescriptionEtFunFacts({ description, funFacts }) {
  return (
    <div>
      <p>{description}</p>
      <h3>Fun Facts:</h3>
      <ul>
        {funFacts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DescriptionEtFunFacts;
