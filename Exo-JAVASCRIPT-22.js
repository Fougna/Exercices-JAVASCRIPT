/* Exercice JavaScript 22 (Conçu par Yoel Melki)

Écrire une fonction qui affiche une boîte de dialogue alert les entiers compris entre les entiers d et f.
Les valeurs de d et f sont saisies au clavier lors de l’exécution.*/

var d = prompt("Veuillez entrer un petit nombre...");
var f = prompt("Veuillez entrer un grand nombre...");
var resultat = "";

function difference (d,f){
    for (i=d+1 ; i<f ; i++){
        resultat = resultat + [i];
    }
    alert ("Les nombres compris entre " + d + " et " + f + " sont :" + resultat);
};

difference(parseInt(d), parseInt(f));