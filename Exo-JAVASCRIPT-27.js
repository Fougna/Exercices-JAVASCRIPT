/* Exercice JavaScript 27 (Conçu par Yoel Melki)

1. Créez une fonction que l’on pourra appeler de la façon suivante : etoile(x) ; X correspondant à un nombre.
Lorsque cette fonction sera appelé, elle affichera X fois « X »  dans la log.*/

var nb = prompt("Choisir un nombre d'étoiles à afficher...");

function etoile(nb){
    for (i=1 ; i<nb+1 ; i++){
        alert(i + " X");
        console.log("X");
    }
};

etoile(parseInt(nb));

/*2. Objectif : Lorsque l’on clique sur le bouton « envoyer » de la page, nous voulons vérifier que le champ « texte » ne soit pas vide.
Lorsque ce champs est vide, affichez cette information dans la page html.
(si nécessaire, il est possible d’ajouter des ‘id’ dans le code  html, pour simplifier le code js.)
    A.	Expliquez les étapes pour aboutir à ce résultat reprenant les principes suivants :
        I.	Comment implémenter l’évènement.
        II. Sélection dans le « DOM » concernant :
            1.	L’évènement.
            2.  La fonction associée permettant de vérifier si les champs sont bien renseignés.
            3.  Accéder à quel partie du DOM.
    B.	Écrivez le code correspondant en utilisant le script créé précédemment. */

/*Bonus :
Créez une fonction que l’on pourra appeler de la façon suivante : factorielle(x) ; X correspondant à un nombre.
Lorsque cette fonction sera appelée, elle retournera la factorielle de X qui sera récupéré dans une variable puis affiché dans la log le résultat.
: Ex. de factorielle de 5 : 1*2*3*4*5.""*/

function factorielle (entier){
    resultat = 1;
    for (i=1 ; i<entier ; i++){
        resultat = resultat*i;
        alert ("La factorielle de " + entier + " est : " + resultat);
    }
};

var entier = prompt("Veuillez entrer un nombre entier positif afin d'en connaître la factorielle...");

factorielle(parseInt(entier));