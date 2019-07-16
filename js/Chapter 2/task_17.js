class Dog {
    constructor() {
        this.name = "Albert";
        this.color = "gray";
    }
}
var terrier = new Dog("Bruce", "red");
Dog.prototype.numLegs = 4;

console.log(terrier.name, terrier.color, terrier.numLegs);