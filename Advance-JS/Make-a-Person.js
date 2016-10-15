var Person = (function() {
  var firstName, lastName;
  
  function Person(firstAndLast) {      
    var fullName = firstAndLast, nameArr = firstAndLast.split(' ');     
     /* 
       var name = firstAndLast.split(' ');
       firstName = name[0];
       lastName = name[1];     
     */
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
  }
  
  Person.prototype.setFirstName = function(firstN) {
    this.first = firstN;
  }; 

  Person.prototype.setLastName = function(lastN) {
    this.last = lastN;
  };

  Person.prototype.getFirstName = function() {
    return firstName;
  };
  
  Person.prototype.getLastName = function() {
    return lastName;
  };
  
  Person.prototype.getFullName = function() {
    return firstName + ' ' + lastName;
  };
    
  Person.prototype.setFullName = function(firstAndLast) {
    // var names = firstAndLast.split(' ');
    /*  */ 
    firstName = firstAndLast.split(' ')[0];
    lastName = firstAndLast.split(' ')[1];  
       
    // return firstName + ' ' + lastName;
  };
    

  return Person;
  // return nameArr[0];
})();

var bob = new Person('Bob Ross');

// Object.keys(bob).length;
// console.log("bob: ", Object.keys(bob).length); // should return 6.
// console.log("bob: ", bob);
bob.setFirstName();  // Bob Ross

// console.log("bob: ", bob);

// console.log(bob instanceof Person);  // true
// Object.keys(bob).length;
