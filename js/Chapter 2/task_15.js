class Dog {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.numLegs = 4;
    }
    ownProperties() {
        console.log(Object.getOwnPropertyNames(this));
    }
}

var terrier = new Dog("Bruce", "red");

terrier.ownProperties();