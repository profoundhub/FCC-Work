var Person = (function() {
  var firstName, lastName;
  // , fullName = firstAndLast;  
  
  function Person(firstAndLast) {    
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1]; 
  
    // this.setFullName(firstAndLast);    

    // this.setFullName = function(name) {fullName = names;};
  }

  Person.prototype.getFirstName = function() {
    return this.first;
  };

  Person.prototype.getLastName = function() {
    return this.last;
  };

  Person.prototype.getFullName = function() {
    return this.first + ' ' + this.last;
  };

  Person.prototype.setFirstName = function(first) {
    this.first = first;
  };

  Person.prototype.setLastName = function(last) {
    this.last = last;
  };

  Person.prototype.setFullName = function(firstAndLast) {
    var names = firstAndLast.split(' ');
    this.first = names[0];
    this.last = names[1];
  };

  return Person;
  })();

var bob = new Person('Bob Ross');

// Object.keys(bob).length;
console.log(Object.keys(bob).length); // should return 6.
bob.getFullName();  // Bob Ross

// console.log("bob: ", bob);

// console.log(bob instanceof Person);  // true
// Object.keys(bob).length;
