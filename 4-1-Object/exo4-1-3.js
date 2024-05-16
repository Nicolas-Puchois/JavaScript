/**
 * 
 * Objets constants ?
importance: 5

Est-il possible de changer un objet déclaré avec const, comment ?

const user = {
  name: "John"
};

// est-ce que ça fonctionne ?
user.name = "Pete";
 */

// on peut car const reste une varirable qui n'est pas protégée du changement.
// On ne peut pas modifier le nom mais uniquement le contenue