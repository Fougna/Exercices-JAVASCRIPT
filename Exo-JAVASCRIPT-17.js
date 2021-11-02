/* Exercice JavaScript 17 (Conçu par Yoel Melki)

1. Créez 2 variables nom_etudiant et prenom_etudiant auxquelles vous affecterez respectivement votre nom et prénom.
Vous afficherez dans une fonction alert() le message suivant : "Bonjour, je m'appelle prenom_etudiant nom_etudiant".
Même exercice en créant une variable type tableau puis une variable type objet.*/

var nom_etudiant = "Ferran", prenom_etudiant = "Sébastien";
alert("Bonjour, je m'appelle " + prenom_etudiant + " " + nom_etudiant);

var tableau = ["Ferran", " Sébastien"];
alert("Bonjour, je m'appelle toujours " + tableau);

var objet = {
    nom : "Ferran",
    prenom : "Sébastien"
};
alert("Bonjour, c'est encore moi : " + objet.prenom + " " + objet.nom);

/*2. Exercice quasi identique au précédent, mais vous n'affectez pas les nom et prénom dans la source, mais en questionnant l'utilisateur pour connaitre son nom et
son prénom.*/

var prenom = prompt("Quel est votre prénom ?", "Tapez votre prénom");
var nom = prompt("Et quel est votre nom de famille ?", "Tapez votre nom de famille");
alert("Vous vous appelez : " + prenom + " " + nom);

/*3. Créez 2 variables nombre1 et nombre2 auxquelles vous affecterez respectivement des valeurs numériques.
Vous en calculerez la somme dont vous affecterez la variable somme et vous afficherez dans une fonction alert() le message suivant : "La somme de nombre1 et de
nombre2 est resultat".
Même exercice en créant une variable type tableau puis une variable type objet. (parseInt())*/

var nombre1 = 48, nombre2 = 45;
var somme = nombre1 + nombre2;
alert("La somme de " + nombre1 + " et de " + nombre2 + " est : " + somme);

var nbrtab = [48,45];
var resultat = 0;
for (i=0 ; i<nbrtab.length ; i++){
    resultat += nbrtab[i];
};
alert("La somme de " + nbrtab[0] + " et de " + nbrtab[1] + " est toujours égale à : " + resultat);

var nbrobj = {
    nombre1 : 48,
    nombre2 : 45
};
var resultat2 = nbrobj.nombre1 + nbrobj.nombre2;
alert("Juste pour rappel : " + nbrobj.nombre1 + " et " + nbrobj.nombre2 + " font toujours : " + resultat2);

/*4. Exercice quasi identique au précédent, mais sans affecter nombre1 et nombre2 dans la source, mais en questionnant l'utilisateur pour connaitre les deux
valeurs numériques nombre1 et nombre2, vous effectuerez les 4 opérations et donnerez 4 messages pour les résultats (addition, soustraction, multiplication et
division).*/

var nombre1 = prompt("Entrez un premier nombre", "Premier nombre");
var nombre2 = prompt("Entrez un second nombre", "Second nombre");
var addition = parseInt(nombre1)+parseInt(nombre2);
var soustraction = parseInt(nombre1)-parseInt(nombre2);
var multiplication = parseInt(nombre1)*parseInt(nombre2);
var division = parseInt(nombre1)/parseInt(nombre2);
alert("L'addition de " + nombre1 + " et de " + nombre2 + " est égale à : " + addition +
      "\nLa soustraction de " + nombre1 + " et de " + nombre2 + " est égale à : " + soustraction +
      "\nLa multiplication de " + nombre1 + " et de " + nombre2 + " est égale à : " + multiplication +
      "\nLa division de " + nombre1 + " et de " + nombre2 + " est égale à : " + division);

/*5. Questionnez l’utilisateur sur son année de naissance, puis trouvez son âge.*/

var annee = prompt("Quelle est votre année de naissance ?", "Tapez votre année");
var year = 2021;
var age = year-annee;
alert("Vous avez " + age + " ans");