/* Exercice JavaScript 24 (Conçu par Yoel Melki)

Créez une fonction
* qui s'appelle checkage.
* qui prend une variable qui s'appelle .
* qui vérifie si l'âge est supérieur à 18 ans.
* Si Oui il indique majeure si non.
* il indique mineur et précise dans combien de temps il aura 18 ans.*/

var age = prompt("Veuillez rentrer votre âge...");

function checkage(age){
    if (age>18){
        alert("Bravo ! Vous êtes majeur(e).");
    }
    else{
        var majeur = 18-age;
        alert("Vous êtes encore mineur(e) !" +
        "\n mais patience vous deviendrez majeur(e) dans " + majeur + " ans.")
    }
    for (i=age ; i<18 ; i++){
        alert("Années restantes avant la majorité :" + i);
    }
};

checkage(parseInt(age));

/* Bonus : Afficher l'ensemble des nombres entre l'âge inférieur à 18 ans et 18 ans.
* Ex :
* checkage(15)
* Vous êtes mineurs
* dans 3 ans Vous serez majeur
* 15 16 17 18*/