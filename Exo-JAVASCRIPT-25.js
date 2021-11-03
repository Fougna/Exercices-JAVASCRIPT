/* Exercice JavaScript 25 (Conçu par Yoel Melki)

1. Les variables (votre nom et âge)
Créez une variable numérique 
Créez une variable chaine de caractere 
Vous l'affichez dans une alert ou dans la log.

Créez un objet avec les mêmes informations
Vous l'affichez dans une alert ou dans la log.*/

var nom = "Ferran", age = 45;
alert(nom + ", " + age);

var id = {
    nom : "Ferran",
    age : 45
};
alert(id.nom + id.age);

/*2. Les conditions (if)
Vérifier que l'âge est > 18 et < 100 SI c'est ok on affiche dans la log OK si non KO*/

var age = prompt("Quel âge avez-vous ?");

if (age>=18 && age<=100){
    alert("OK !");
}
else{
    alert("KO !");
};

/*3. Les boucles
1 Afficher les nombres de 5 à 15.
2 Afficher le symbole "" de 5 à 15 fois.
3 Demandez à l'utilisateur un nombre entre 1 et 30 et afficher ce nombre de fois le symbole ""*/

var num1 = 5;
var num2 = 15;

for (i=num1 ; i<num2+1 ; i++){
    resultat = i;
    alert(resultat + ' " "');
};

var user = prompt("Tapez un nombre entre 1 et 30...");

function numerotation(user){
    if(user>=1 && user<=30){
        for (i=1 ; i<user+1 ; i++){
            quotes = [i] + ' " "';
            alert(quotes);
        };
    }else{
        alert("La saisie est incorrecte.");
        user = prompt("Tapez un nombre entre 1 et 30...");
    }
}

numerotation(parseInt(user));