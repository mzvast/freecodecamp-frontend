/**
 * Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
 */


var Person = function(firstAndLast) {
  var first_name = firstAndLast.split(' ')[0];
  var last_name = firstAndLast.split(' ')[1];
    this.getFirstName=function(){
      return first_name;
    };
    this.getLastName=function(){
      return last_name;
    };
    this.getFullName=function(){
      return first_name +' '+ last_name;
    };
    this.setFirstName=function(first){
      first_name = first;
    };
    this.setLastName=function(last){
      last_name = last;
    };
    this.setFullName=function(firstAndLast){
      first_name = firstAndLast.split(' ')[0];
      last_name = firstAndLast.split(' ')[1];
    };
  
};

var bob = new Person('Bob Ross');
// bob.setLastName("Curry")
// console.log(bob.getFullName())
// console.log(bob);
// console.log(Person);
// console.log(bob instanceof Person);
console.log(Object.keys(bob).length)