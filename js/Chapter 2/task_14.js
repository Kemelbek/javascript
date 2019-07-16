function Dog(name,color){
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
var terrier = new Dog("Bruce", "red");
console.log(terrier.name, terrier.color, terrier.numLegs);