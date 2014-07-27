// all the different objects are created here

var Person = require('./person');

var Models = {};

Models.Person = Person;

// var personParams = {
// 	firstname: "doesn't matter",
// 	lastname: "doesn't matter",
// 	id: 2 // this one matters!!
// }

// var randomPerson = new Person( personParams );

// randomPerson.destroy( function() {} );

// Models.Person.all(function(err,res) {
// 	console.log(res)
// });

// Models.Person.findBy("lastname", "Yin", function(err,res) {
// 	console.log(res);
// });

// Models.Person.create(newPerson, function(err,res) {
// 	// console.log(res)
// }); 

// Models.Person.destroy(function(err,res) {
// 	// console.log(res)
// }); 



// Models.Person.updateById("Siejen", "Yin", 11, function(err,res) {
// 	// console.log(res)
// }); 

























// // just testing stuff
// var logPeople = function(err, people){
// 	// console.log("Output from Person all");
//  	console.log(people);
// };
// //Models.Person.all(logPeople);









// Models.Person.findBy("id", 1, function(err, person){
// 	// console.log("Output from Person findby");	
//   console.log("found", person);
// });
// //   person.update({firstname: "sam", lastname: "creek"}, function(err, person){
// //     console.log("UPDATED:", person)
// //   });
// // })

// // just testing stuff
// // var siejen = Models.Person.findBy("id", 4, )
// // siejen.destroy("id", 1, function(err, people){
// //  	console.log(Deleted);
// // });

module.exports = Models;