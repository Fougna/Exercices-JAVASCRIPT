/* Exercice JavaScript 02 (Conçu par Amin Mangeot)

1. Créer une variable nom en l’initialisant à la valeur "John".
Affichez ensuite la valeur de la variable nom avec l’instruction console.log().*/

var nom = "John";
console.log(nom);

/* 2. Définissez une variable hello avec comme valeur "Bonjour comment ça va".
À la ligne en dessous, définissez une deuxième variable nommée prenom avec comme valeur le prénom "John".
Sur une nouvelle ligne, grâce à la commande console.log(), affichez la concaténation de la variable hello et prenom.
Vous pouvez constater que le résultat peut être encore amélioré, le prénom John est collé directement au mot va.
Il devrait y avoir une espace entre les deux, mais JavaScript n’en ajoutera pas automatiquement si on ne lui indique pas explicitement.
Il suffira d’ajouter un espace à la fin de la chaîne de caractère "Bonjour comment ça va ".
L’espace sera placé entre la dernière lettre de la phrase et le guillemet.*/

var hello = "Bonjour, comment ça va ";
var prenom = "John";
console.log(hello + prenom);

/* 3. Créer une variable exemple initialisée à la valeur "Je travaille en js".
Affichez dans la console la longueur de la chaîne de caractères contenue dans la variable exemple.*/

var exemple = "Je travaille en JS";
console.log(exemple.length);

/* 4. Initialiser une variable langage avec comme valeur JavaScript.
Affichez dans la console le 1er caractère sur cette même ligne, ajouter le 5ème caractère en utilisant la concaténation pour joindre les deux caractères.*/

var langage = "JavaScript";
console.log(langage[0] + langage[4]);

/* 5. À vous de jouer, définir une variable dessert initialisée avec la chaîne de caractères "corbeille de fruits frais".
Affichez dans console.log() le segment "fruits" de la variable dessert.*/

var dessert = "Corbeille de fruits frais";
console.log(dessert.slice(13,19));

/* 6. Initialisez une variable name avec la valeur "John Doe".
Affichez avec console.log() la valeur de la variable name en majuscule.
À la ligne suivante, affichez le même résultat mais cette fois-ci en minuscule.*/

var name = "John Doe";
console.log(name.toUpperCase());
console.log(name.toLowerCase());

/* 7. Initialisez une variable paiement avec la valeur false.
Afficher cette variable avec console.log().
Modifier à la ligne suivante la valeur de la variable en la passant à true.
Afficher cette variable avec console.log().*/

var paiement = false;
console.log(paiement);
paiement = true;
console.log(paiement);