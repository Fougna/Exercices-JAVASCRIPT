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

/*2. Objectif : Lorsque l’on clique sur le bouton « envoyer » de la page, nous voulons vérifier que les champs « texte » ne soient pas vides.
Lorsque ces champs sont vides, affichez cette information dans la page html.
(si nécessaire, il est possible d’ajouter des ‘id’ dans le code  html, pour simplifier le code js.)
    A.	Expliquez les étapes pour aboutir à ce résultat reprenant les principes suivants :
        I.	Comment implémenter l’évènement.
        II. Sélection dans le « DOM » concernant :
            1.	L’évènement.
            2.  La fonction associée permettant de vérifier si les champs sont bien renseignés.
            3.  Accéder à quel partie du DOM.
    B.	Écrivez le code correspondant en utilisant le script créé précédemment. */

document.getElementById("envid").addEventListener("click", sender, false);

function sender(){
    if (document.getElementById("textid").value=""){
        document.getElementById("divid").innerHTML="Le champ n'est pas renseigné.";
        alert("Le champ n'est pas renseigné.");
    };
}


/*Bonus :
Créez une fonction que l’on pourra appeler de la façon suivante : factorielle(x) ; X correspondant à un nombre.
Lorsque cette fonction sera appeléE, elle retournera la factorielle de X qui sera récupéré dans une variable puis affiché dans la log le résultat.
: Ex. de factorielle de 5 : 1*2*3*4*5.""*/