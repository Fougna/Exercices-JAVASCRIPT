/* Exercice JavaScript 05 (Conçu par Amin Mangeot)

1. Créer une boucle qui va tourner 5 fois en utilisant pour compteur de boucle une variable nommée i initialisée à 0.
Cette boucle devra afficher la phrase "1 tour de boucle" en utilisant console.log().
Concaténer la variable i au début de la chaîne de caractères.
Penser à mettre un espace entre la première lettre de la chaîne de caractères et le guillemet.
(Changer le 1 de “1 tour de boucle” pour que ça corresponde exactement au tour de boucle. Soit “1 tour de boucle” , ensuite “2 tour de boucle” ,“3 tour de boucle”, etc…)*/

var i = 0;
for (i=1 ; i<5 ; i++){
    console.log(i + " tour de boucle");
};

/* 2. Au début du programme créer une variable contact, elle contient un tableau avec les valeurs suivantes : Vanessa, Hugo, Michael, Léo, John.
Une boucle pourrait nous servir à parcourir l’intégralité des prénoms enregistrés dans ce tableau.
Modifier la boucle pour que le code puisse afficher la phrase "1 tour de boucle Vanessa", "1 tour de boucle Hugo", "2 tour de boucle Michael"...*/

var contact = ["Vanessa", "Hugo", "Michaël", "Léo", "John"];
for (i=1 ; i<contact.length ; i++){
    console.log(i + " tour de boucle " + contact[i]);
};