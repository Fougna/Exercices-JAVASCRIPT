/* Exercice JavaScript 19 (Conçu par Yoel Melki)

1. Déclarer et définir trois variables numériques.
Si elles sont égales, écrire : « Les trois variables sont identiques. »
Si seulement deux sont identiques, écrire : « Deux des variables sont de valeur égale. »
Sinon, écrire : « Les trois variables sont différentes. »*/

var nombre1 = prompt("Entrez un premier nombre...", "Premier nombre");
var nombre2 = prompt("Entrez un deuxième nombre...", "Deuxième nombre");
var nombre3 = prompt("Entrez un troisième nombre...", "Troisième nombre");
if (parseInt(nombre1)==parseInt(nombre2) && parseInt(nombre2)==parseInt(nombre3)){
    alert("Les trois variables sont identiques.");
}
else if (parseInt(nombre1)==parseInt(nombre2) || parseInt(nombre1)==parseInt(nombre3) || parseInt(nombre2)==parseInt(nombre3)){
    alert("Deux des variables sont de valeur égale.");
}
else{
    alert("Les trois variables sont différentes.");
};

/*2. Créez un script disant si une variable est positive ou négative.*/

var nombre4 = prompt("Entrez un nombre positif ou négatif...", "Positif ou négatif");
if (parseInt(nombre4)>0){
    alert("Le nombre entré est positif.");
}
else if (parseInt(nombre4)<0){
    alert("Le nombre entré est négatif.");
}
else{
    alert("Le nombre entré est à la fois positif et négatif.");
};

/*3. Créez un script disant si une variable est pair ou impair.*/

var nombre5 = prompt("Entrez un nombre pair ou impair...","Pair ou impair");
if (parseInt(nombre5)%2==0){
    alert("Le nombre entré est pair.");
}
else{
    alert("Le nombre entré est impair.");
};