/* Exercice JavaScript 03 (Conçu par Amin Mangeot)

1. Créer une variable fruits qui va contenir un tableau avec les valeurs suivantes : pommes, poires, bananes.
(Attention à bien respecter l’ordre des fruits lors de la création du tableau)
Afficher cette variable fruits avec console.log().*/

var fruits = ["Pommes", "Poires", "Bananes"];
console.log(fruits);

/* 2. Créer une variable contact qui va contenir un tableau avec les valeurs suivantes : Vanessa, Hugo, Michael.
(Attention à bien respecter l’ordre des contacts lors de la création du tableau)
Afficher dans la console le 3e contact de notre tableau.*/

var contact = ["Vanessa", "Hugo", "Michaël"];
console.log(contact[2]);

/* 3. Créer une variable contact qui va contenir un tableau avec les valeurs suivantes : Vanessa, Hugo, Michael.
(Attention à bien respecter l’ordre des contacts lors de la création du tableau)
Modifier le 3e contact du tableau en mettant "Léo" à la place de "Michael".
Afficher dans la console le tableau contact.*/

var contact = ["Vanessa", "Hugo", "Michaël"];
contact[2] = "Léo";
console.log(contact);

/* 4. Créer une variable contact qui va contenir un tableau avec les valeurs suivantes : Vanessa, Hugo, Michael.
(Attention à bien respecter l’ordre des contacts lors de la création du tableau)
Afficher dans la console la longueur du tableau contact.*/

var contact = ["Vanessa", "Hugo", "Michaël"];
console.log(contact.length);

/* 5. Créer une variable contact qui va contenir un tableau avec les valeurs suivantes : Vanessa, Hugo, Michael.
(Attention à bien respecter l’ordre des contacts lors de la création du tableau)
Ajoutez Jules au début du tableau.
Ajoutez Marion à la fin du tableau.
Afficher le tableau dans la console.*/

var contact = ["Vanessa", "Hugo", "Michaël"];
contact.unshift("Jules");
contact.push("Marion");
console.log(contact)

/* 6. Créer une variable contact qui va contenir un tableau avec les valeurs suivantes : Vanessa, Hugo, Michael, Léo.
(Attention à bien respecter l’ordre des contacts lors de la création du tableau)
Supprimer la dernière valeur du tableau.
Supprimer de nouveau la dernière valeur du tableau.
Sur une nouvelle ligne afficher le contenu du tableau dans la console.
Supprimer la première valeur du tableau.
Sur une nouvelle ligne afficher le contenu du tableau dans la console.
Sur une nouvelle ligne afficher la taille du tableau dans la console.*/

var contact = ["Vanessa", "Hugo", "Michaël", "Léo"];
contact.pop();
contact.pop();
console.log(contact);
contact.shift();
console.log(contact);
console.log(contact.length);