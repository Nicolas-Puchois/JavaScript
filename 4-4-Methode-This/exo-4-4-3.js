/**
 * Chaining
importance: 2

Il y a un objet ladder qui permet de monter et descendre :

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // affiche l'étape en cours
    alert( this.step );
  }
};

Maintenant, si nous devons faire plusieurs appels en séquence, nous pouvons le faire comme ceci :

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0

Modifiez le code de up et down pour rendre les appels chaînables, comme ceci :

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

Cette approche est largement utilisée dans les bibliothèques JavaScript.
 */

let limit = 0;

let ladder = {
    step: 0,
    up() {
      this.step++;
    },
    down() {
      this.step--;
    },
    showStep: function() { // affiche l'étape en cours
      alert( this.step );
    }
  };

for (let i = 0; i < 3; i++){
    if(i == 1){
        while(limit <3){
            ladder.up();
            ++limit
        }
    }
    ladder.down();
    ladder.showStep()
}


// correction

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep();