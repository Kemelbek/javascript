//Object can inherit its behavior from another object by 
// cloning its prototype object:
// ChildObject.prototype = Object.create(ParentObject.prototype);
//Then the ChildObject received its own methods by 
// chaining them onto its prototype:
// ChildObject.prototype.methodName = function () {};
//It's possible to override an inherited method. 
// Override the fly() method for Penguin so that it returns 
// "I can't fly, I swim."
function Bird() {}
Bird.prototype.fly = function () {
    return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = function () {
    return `I can't fly, i swim.`;
}
// // Add your code above this line
let penguin = new Penguin();
console.log(penguin.fly()); // Should print "I can't fly, I swim."

// function Tree(name) {
//     this.name = name;
// }

// var theTree = new Tree('Redwood');
// console.log('theTree.constructor is ' + theTree.prototype.constructor);