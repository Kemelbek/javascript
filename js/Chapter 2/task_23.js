function Animal() {}
Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() extends Animal(){
    }
// Add your code below this line
let beagle = new Dog();
beagle.eat(); // Should print "nom nom nom"