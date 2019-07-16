var dog = {
    name: "Sharik",
    numLegs: 4,
    saylegs: function(){
        return this.name+" has "+this.numLegs+" legs";
    }
};

// console.log(dog.name,dog.numLegs);
console.log(dog.saylegs());