/*
var names = ['Brian', 'Molly', 'Michael'];

names.forEach(function(name) {
  console.log('forEach: ', name);
});

names.forEach((name) => {
  console.log('Arrow:', name);
});

names.forEach((name) => console.log('MyArrow: ', name));

var returnMe = (name) => name + "!";
console.log(returnMe("Brian"));


var person = {
  name: 'Brian',
  greet: function() {
    names.forEach(function(name) {
      console.log(this.name + " says hi to " + name)
    });
  }
};

person.greet();


var myPerson = {
  name: 'Michael',
  greet: function() {
    names.forEach((name) => console.log(this.name + " says hi to " + name));
  }
}

myPerson.greet();
*/

function add(a, b) {
  return a + b;
}
var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a, b) =>  a + b;

console.log(add(1, 3));
console.log(add(9, 0));

console.log(addStatement(1, 5));
console.log(addExpression(2, 15));
