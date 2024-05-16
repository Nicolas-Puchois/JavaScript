/**Créer une calculatrice
importance: 5

Créez un objet calculator avec trois méthodes :

    read() demande deux valeurs et les enregistre en tant que propriétés d’objet avec les noms a et b respectivement.
    sum() renvoie la somme des valeurs sauvegardées.
    mul() multiplie les valeurs sauvegardées et renvoie le résultat.

let calculator = {
  // ... votre code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
 * 
 */

let calculator = {
    read() {
      this.a = +prompt("Entrer un nombre",0);
      this.b = +prompt("Entrer un autre nombre",0);
    },
    sum(){
      return this.a + this.b
    },
    mul(){
      return this.a * this.b
    }    
}


// correction

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );