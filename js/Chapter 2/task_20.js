class Dog {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    ownProps() {
        console.log(Object.getOwnPropertyNames(this));
    }
    prototypeProps() {
        console.log(Object.keys(Object.getPrototypeOf(this)));
    }

}
Dog.prototype.numLegs = 4;
Dog.prototype.eat = function () {
    console.log("nom nom nom");
};
Dog.prototype.describe = function () {
    console.log(`My name is ${this.name}`);
};

var terrier = new Dog("Bruce", "red");

terrier.eat();
terrier.describe();