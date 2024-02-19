### `NOTES`

Partie responsive à améliorer

### `Difficultés rencontrées`

1 : Avoir le nom en anglais lors de la requête vers l'API pour récupérer les images d'une planète.

2 : Trouver une bonne configuration pour les images d'une planète ou de la mission Mars Rovers , car il y a beaucoup d'images. J'ai donc choisi un carousel avec un drag:free pour les versions mobiles surtout mais en gardant les flèches pour la navigation

3 : Changement d'API (spoonacular initialement) car l'API permettait de faire 150 requêtes par jour, l'API de la NASA permet d'en faire 1000 par heure gratuitement avec une clé , sans clé on peut en faire 500 par heure.On peut vérifier notre limite de débit actuelle et les détails d'utilisation en inspectant les en-têtes "X-RateLimit-Limit" et "X-RateLimit-Remaining" HTTP renvoyés sur chaque réponse d'API.

4 : Lors de la confection de la Navbar , (je l'ai fais en dernier pour voir si c'était plus simple avec tous les éléments déjà fais) j'ai eu un problème , explication : lorsqu'on appuyait sur planète et puis qu'on sélectionnait une planète , toutes les infos étaient bien présentent , sauf la photo principale de la planète , j'ai donc rajouté , les images et url dans la constante planets dans Navbar.jsx (demande à Jordan s'il n'y a pas une autre solution)

5 : Lors du déboggage de fin de projet , j'ai découvert que j'avais certaines erreurs avec les requêtes vers l'API quand je mettais ma clé ( juste pour pouvoir faire plus de requête même si ce n'était pas nécessaire ) j'en ai conclus que le problème était la clé en elle même. Pour récupérer la clé il faut faire une demande (https://api.nasa.gov/) à la section "Generate API Key" qu'on reçoit par mail. Et la clé qu'on reçoit n'est pas forcément fonctionnelle.

### `Sécurité`

La clé de l'API se trouve dans un autre fichier pour qu'on ne puisse pas la récupérer.

Dans la page qui affiche des éléments dynamiques, l'utilisateur est informé lorsqu'une erreur se produit pendant la récupération des images.

Dans Recherche.jsx , si la réponse vers l'api est negative renvoie une erreur pour l'utilisateur. Si la réponse est correcte renvoie vers isLoading qui charge les images. "images.length" sert à afficher le carousel parce que les fleches de navigation s'affichait sans même avoir fait une recherche.

### `Idée`

Ajouter des lunes , corps célestes en plus (à voir selon les délais (oublie pas CMS idiot))

Regarder si Splide offre la possibilité de controler les images (afficher en grand par exemple)