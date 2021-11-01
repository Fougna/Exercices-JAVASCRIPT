/* Exercice JavaScript 04 (Conçu par Amin Mangeot)

1. Créer une variable contact initialisée avec un objet qui contient :
Une propriété prenom avec pour valeur "Vanessa".
Une propriété phone avec pour valeur "0612345678".
Une propriété email avec pour valeur "vanessa@gmail.com".
Attention à ne pas mettre de majuscule ni de caractère accentué dans le nom des propriétés.
Affichez le contenu de la variable contact avec console.log().
Contrairement aux tableaux, la fonction console.log ne nous permet pas de décortiquer la structure d'un objet.
Pour cela il faut utiliser à l’intérieur de console.log un nouvel outil JSON.stringify() dans lequel il faudra mettre le nom de l'objet entre les parenthèses.
Ce qui donne console.log(JSON.stringify(contact));
En utilisant la variable contact écrire cette ligne à la suite du programme.*/

var contact = {
    prenom : "Vanessa",
    phone : "0612345678",
    email : "vanessa@gmail.com"
};
console.log(contact);
console.log(JSON.stringify(contact));

/* 2. Créer une variable contact initialisée avec un objet qui contient :
Une propriété prenom avec pour valeur "Vanessa".
Une propriété phone avec pour valeur 0612345678.
Une propriété email avec pour valeur "vanessa@gmail.com".
Attention à ne pas mettre de majuscule ni de caractère accentué dans le nom des propriétés.
Afficher dans la console la valeur du prenom de l’objet contact en notation crochet.
À la ligne suivante, afficher dans la console la valeur de email de l’objet contact en notation pointée.*/

var contact = {
    prenom : "Vanessa",
    phone : "0612345678",
    email : "vanessa@gmail.com"
};
console.log(contact["prenom"]);
console.log(contact.email);

/* 3. Créer une variable contact initialisée avec un objet qui contient :
Une propriété prenom ayant pour valeur "Vanessa".
Une propriété phone ayant pour valeur "0612345678".
Une propriété email ayant pour valeur "vanessa@gmail.com".
Attention à ne pas mettre de majuscule ni de caractère accentué.
Ajouter la propriété nom ayant pour valeur "Doe" en utilisant la notation pointée.
Sur la ligne suivante, afficher dans la console (en utilisant JSON.stringify()) la valeur de l’objet contact.*/

var contact = {
    prenom : "Vanessa",
    phone : "0612345678",
    email : "vanessa@gmail.com"
};
contact.nom = "Doe";
console.log(JSON.stringify(contact));

/* 4. Créer un tableau avec un objet dedans qui contient :
Une propriété prenom ayant pour valeur "Vanessa".
Une propriété phone ayant pour valeur "0612345678".
Une propriété email ayant pour valeur "vanessa@gmail.com".
Ajoutez un contact au tableau en utilisant la méthode push sur le tableau contact.
Le contact aura une propriété nom avec comme valeur "Anna", une propriété phone avec comme valeur "0123456789" et une propriété email avec comme valeur
"anna@gmail.com".
Sur la ligne suivante, afficher dans la console (en utilisant JSON.stringify()) la valeur du tableau contact.*/

var contact = [{
    prenom : "Vanessa",
    phone : "0612345678",
    email : "vanessa@gmail.com"
}];
console.log(contact);
contact.push({
    nom : "Anna",
    phone : "0123456789",
    email : "anna@gmail.com"
});
console.log(JSON.stringify(contact));