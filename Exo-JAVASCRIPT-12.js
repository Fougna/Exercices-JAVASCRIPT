/* Exercice JavaScript 12 (Conçu par Amin Mangeot)

1. Modifier le tableau d’objets ci-dessous pour modifier le format du numéro de téléphone, créer un type de contact admin et supprimer les doublons :*/

var contacts = [
   {
       prenom : 'john',
       telephone : '0611223344',
   },
   {
       prenom : 'elise',
       telephone : '0655667799'
   },
   {
       prenom : 'franck',
       telephone : '0612345678'
   },
   {
       prenom : 'elisa',
       telephone : '0612345678'
   }
];

/*2. Téléphone
👉 Dans ce challenge, il faut modifier les numéros de téléphone afin de les afficher en format international +33612345678.
👉 Le résultat doit être un nouveau tableau.*/

var newcontact = [];
for (i=0 ; i<contacts.length ; i++){
    newcontact.push({
        prenom : contacts[i].prenom,
        telephone : "+33" + contacts[i].telephone.slice(1)
    })
};
console.log(newcontact);

/*3. Admin
👉 Modifiez votre tableau pour créer une nouvelle propriété “admin” pour chaque contact.
Cette propriété doit être à true si le contact est admin, à false sinon.
👉 Faire en sorte que John soit admin, les autres non.
👉 Le résultat doit être un nouveau tableau.*/

var contactadmin = [];
for (i=0 ; i<newcontact.length ; i++){
    contactadmin.push({
        prenom : newcontact[i].prenom,
        telephone : newcontact[i].telephone
    })
    if (newcontact[i].prenom == "john"){
        contactadmin.push({
            admin : true})
    }else{
        contactadmin.push({
            admin : false})
        }
    };
console.log(contactadmin);