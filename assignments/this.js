/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window
    When this is called in global scope it will return all of the javascript bits within the JS object.

* 2. Implicit Binding
    Whenever a function is called by a preceding . the object before the . will contextually apply this to that object.

* 3. New Binding
    Whenever we use a constructor function, the 'new' binding referes to only that object that is created and returned by the constructor function. 
    
* 4. Explicit Binding
    When using .call or .apply method this explictily puts 'this' in the context of the specifc object being created or referenced.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function globalScope(thisGlobal) {
//     console.log(this);
//     return thisGlobal;
// }

// Principle 2

// code example for Implicit Binding

const myObj = {
  name: "Zurglots",
  sayMyName: function(username) {
    console.log(`My ${username} is ${this.name}.`);
    console.log("implicit binding ex", this);
  }
};

myObj.sayMyName("handle");

// Principle 3

// code example for New Binding

function BestTerranNA(spacemarine) {
  this.greeting = "Hello ";
  this.spacemarine = spacemarine;
  this.speak = function() {
    console.log(this.greeting + this.spacemarine + ", prepare to die.");
    console.log(this);
  };
}

const protoss = new BestTerranNA("Acolyte");
const zerg = new BestTerranNA("Zergling");

protoss.speak();
zerg.speak();

// Principle 4

// code example for Explicit Binding

zerg.speak.call(protoss);
