/* Exercice JavaScript 20 (Conçu par Yoel Melki)

Écrire une fonction nommée moyenne qui permet d’entrer 3 notes (DC1, DC2, DC3), qui calcule et affiche la moyenne obtenue.*/

function moyenne (DC1,DC2,DC3){
    resultat = (DC1+DC2+DC3)/3;
    alert("Votre moyenne est : " + resultat);
};

var DC1 = prompt("Votre première note est...");
var DC2 = prompt("Votre deuxème note est...");
var DC3 = prompt("Votre troisième note est...");

moyenne (parseInt(DC1), parseInt(DC2), parseInt(DC3));