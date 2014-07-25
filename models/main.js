// all the different objects are created here

var Person = require('./person');

var Models = {};

Models.Person = Person;

// just testing stuff
Models.Person.all(function(err, people){
	// console.log("Output from Person all");
 	console.log(people);
});

Models.Person.findBy("id", 1, function(err, person){
	// console.log("Output from Person findby");	
  console.log("found", person);
});
//   person.update({firstname: "sam", lastname: "creek"}, function(err, person){
//     console.log("UPDATED:", person)
//   });
// })

module.exports = Models;