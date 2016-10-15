var Person = function(firstAndLast) {
  this.setFullName(firstAndLast);
};

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
  names = firstAndLast.split(' ');
  this.first = names[0];
  this.last = names[1];
};

var bob = new Person('Bob Ross');

bob.getFullName();  // Bob Ross
console.log(bob instanceof Person);  // true
// Object.keys(bob).length;
