var Person = (function() {
  var firstName, lastName;
  
  function Person(firstAndLast) {      
    var fullName = firstAndLast, nameArr = firstAndLast.split(' ');     
     
       var name = firstAndLast.split(' ');
       firstName = name[0];
       lastName = name[1];     
     
    /* 
    
      firstName = firstAndLast.split(' ')[0];
      lastName = firstAndLast.split(' ')[1]; 
    */
    firstName = nameArr[0];
    lastName = nameArr[1];
    
    
    /*
    console.log(firstName);
    console.log(lastName);
    */
    
    // console.log(nameArr[0]);
    // return nameArr[0];


    
  this.getFirstName = function() {
    return firstName;
  };
  
  this.getLastName = function() {
    return lastName;
  };
    
  
  this.setFirstName = function(name) {
    this.first = name;
    fullName = name + ' ' + fullName.split(' ')[1];
    return fullName;
  };
/*    
  this.setFirstName = function(first) {
    this.first = first;
    nameArr[0] = first;    
  }; 
*/
    
  this.setLastName = function(name) {
    this.last = name;
    fullName = firstAndLast.split(' ')[0] + ' ' + name;
    return fullName;
  };
    
  this.getFullName = function() {
    return firstName + ' ' + lastName;
    // fullName = name;
  };
      
  this.setFullName  = function(firstAndLast) {
    fullName = name;
    nameArr = firstAndLast.split(' ');
  };
}
  /*
  Person.prototype.getFirstName = function() {
    return firstName;
  };
  
  Person.prototype.getLastName = function() {
    return lastName;
  };
  
  Person.prototype.getFullName = function() {
    return firstName + ' ' + lastName;
  };
    */
  Person.prototype.setFullName = function(firstAndLast) {
    // var names = firstAndLast.split(' ');
    /* */ 
    /* */
      firstName = firstAndLast.split(' ')[0];
      lastName = firstAndLast.split(' ')[1];  
    
       // nameArr = firstAndLast.split(' '); 
    // return firstName + ' ' + lastName;
  };
    
  return Person;
  // return nameArr[0];
})();

var bob = new Person('Bob Ross');

bob.setFirstName("Haskell");
bob.setLastName("Curry");
bob.getFirstName();
// Object.keys(bob).length;
// console.log("bob: ", Object.keys(bob).length); // should return 6.
// console.log("bob: ", bob);

// bob.setFirstName();  // Bob Ross

// console.log("bob: ", bob);

// console.log(bob instanceof Person);  // true
// Object.keys(bob).length;
