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

var terrier = new Dog("Bruce", "red");

terrier.ownProps();
terrier.prototypeProps();