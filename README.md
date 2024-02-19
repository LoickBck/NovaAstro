### `NOTES`

Animation à faire 

Partie responsive à améliorer

Pas oublier les gifs sous la description

### `Difficultés rencontrées`

1 : Avoir le nom en anglais lors de la requête vers l'API pour récupérer les images d'une planète.

2 : Trouver une bonne configuration pour les images d'une planète ou de la mission Mars Rovers , car il y a beaucoup d'images.

3 : Changement d'API (spoonacular initialement) car l'API permettait de faire 150 requêtes par jour, l'API de la NASA permet d'en faire 1000 par heure gratuitement.

4 : Lors de la confection de la Navbar , (je l'ai fais en dernier pour voir si c'était plus simple avec tous les éléments déjà fais) j'ai eu un problème , explication : lorsqu'on appuyait sur planète et puis qu'on sélectionnait une planète , toutes les infos étaient bien présentent , sauf la photo principale de la planète , j'ai donc rajouté , les images et url dans la constante planets dans Navbar.jsx (demande à Jordan s'il n'y a pas une autre solution)

### `Sécurité`

La clé de l'API se trouve dans un autre fichier pour qu'on ne puisse pas la récupérer.

Dans la page qui affiche des éléments dynamiques, l'utilisateur est informé lorsqu'une erreur se produit pendant la récupération des images.

### `Idée`

Ajouter une section dans la page Home , ( au dessus ou en dessous des planètes) une barre de recherche qui affichera les images correspondantes.

Ajouter des lunes , corps célestes en plus (à voir selon les délais (oublie pas CMS idiot))