/* Exercices JavaScript 01

1. Définir une variable qui se nomme seconde et l’initialiser à 60, afficher le contenu de la variable seconde.*/

var seconde = 60;
console.log(seconde);

/* 2. Définir une variable qui se nomme minute et l’initialiser à 20.
À la ligne suivante, modifier la variable minute en lui donnant comme nouvelle valeur 30.
En utilisant la commande console.log(), afficher le contenu de la variable minute.*/

var minute = 20;
minute = 30;
console.log(minute);

/* 3. Définir une variable qui se nomme seconde et qui est initialisé à la valeur 60.
À la suite, définir une autre variable minute initialisée à 30.
En utilisant la commande console.log(), afficher la multiplication des deux variables.*/

var seconde = 60, minute = 30;
console.log(seconde * minute);

/* 4. Imaginons une variable qui nous permette de compter le nombre d’appels téléphoniques que l’on a reçu dans la journée.
À chaque appel, on ajoutera 1 à cette variable.
Créez une variable nombreTel et initialisez-la à 0.
Incrémentez cette variable 3 fois de suite et affichez dans la console (avec console.log()) la valeur de cette variable.
À la suite, décrémentez cette variable une fois et affichez sa valeur avec la commande console.log().*/

var nombreTel = 0;
nombreTel = nombreTel + 3;
console.log(nombreTel);
nombreTel = nombreTel -1;
console.log(nombreTel)

/* 5. Imaginons une variable nommée email qui corresponde au nombre d’e-mails reçus dans la journée.
Initialisez cette variable à 23.
À la ligne en dessous, ajoutez 5 à la variable et affichez le résultat de la variable e-mail dans la console.*/

var email = 23;
email = email + 5;
console.log(email);

/* 6. Imaginons une variable nommée scoreGame qui correspond au score d’un jeu vidéo. Initialisez cette variable à 420.
À la ligne en dessous, ajoutez 15 au score en utilisant un raccourci syntaxique puis affichez le résultat de cette variable dans la console.*/

var scoreGame = 420;
scoreGame += 15;
console.log(scoreGame);