/* Exercice JavaScript 16 (Conçu par Yoel Melki)

1. Inverser deux variables (Prénom / Nom)*/

var prenom = "Sébastien", nom = "Ferran";
var backup = "";
backup = prenom;
prenom = nom;
nom = backup;
console.log(prenom + " "+ nom);

/*2. Créer une variable puis l’afficher dans la log :
    1. De votre nom et prénom
    2. Votre âge
    3. Une variable à true
    4. Une variable affichant « il dit : « c’est intéressant » »*/

var maVariable = {
    nom : "Ferran",
    prenom : "Sébastien",
    age : 45,
    homme : true,
    alerter : "Il dit : `C'est intéressant.`"
}
console.log(maVariable);

/*3. Déclarer une variable x avec une valeur de votre choix.
Afficher la valeur d’une variable y telle que y = x + 10..*/

var x = 45;
var y = 0;
console.log(y = x + 10);