/* Exercice JavaScript 21 (Conçu par Yoel Melki)

1. Afficher 20 lignes « Bonjour !» en numérotant les lignes.*/

for (i=1 ; i<21 ; i++){
    alert("Bonjour ! Ligne n° " + i);
};

/*2. Écrire un script demandant de l’utilisateur d’entrer son âge et de contrôler la validité de l’âge entré (si l’âge est erroné afficher un message d’erreur et
redemander de saisir l’âge).*/

function checkage (age){
    while(age<=0 || age>=110){
        alert("Votre âge n'est pas valide.");
        age = prompt("Veuillez rentrer un âge valide...");
    }
    alert("Merci d'avoir rentré votre âge.");
};

var age = prompt("Veuillez rentrer votre âge...");

checkage(parseInt(age));

/*3. Saisie contrôlée : utiliser une saisie contrôlée afin que l’entier b soit obligatoirement différent de 0.
Tant que l’utilisateur choisira une valeur incorrecte (donc nulle), une nouvelle valeur sera redemandée.*/

function valdiff(b){
    while(b==0){
        alert("NON ! C'est zéro !");
        b = prompt("Veuillez recommencer...");
    }
    alert("Merci d'avoir rentré un nombre entier différent de zéro.");
};

var b = prompt("Veuillez rentrer un nombre entier différent de zéro...");

valdiff(parseInt(b));

/*4. Écrire un programme permettant de saisir un entier compris dans l’intervalle [1, 15] et de calculer son carré.
Le programme affichera un message d’erreur si l’entier n’est pas dans l’intervalle et demandera une nouvelle saisie.*/

function racine (resultat){
    while(resultat<1 || resultat>15){
        resultat = prompt("Le nombre rentré n'est pas compris entre 1 et 15, veuillez recommencer...")
    }
    var carre = Math.sqrt(resultat);
    alert("La racine carrée de " + resultat + " est : " + carre);
};

var resultat = prompt("Veuillez rentrer un nombre compris entre 1 et 15...");

racine(parseInt(resultat));

/*5. Écrire un script affichant la moyenne d’un tableau.*/

/*6. Écrire un script affichant des * n fois.*/

/*7. Écrire un script qui permet d'afficher la table de multiplication d'un nombre entier n : La valeur de n sera demandée à l’utilisateur via une boîte de dialogue.*/

/*8. Écrire un script qui calcule la factorielle d’un nombre entier positif n.*/