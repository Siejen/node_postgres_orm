// this has all of the routes

var express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  Person = require('./models/main.js').Person,
  app = express();



app.set("view engine", "ejs");
// Middleware
app.use(bodyParser.urlencoded());
app.use(methodOverride("_method"));


app.get("/people", function(req, res){
  Person.all(function(err,allPeople) {
    res.render("people/index", {people: allPeople})    
  });
});

app.get("/people/new", function(req, res){
  res.render("people/new")
});

app.get("/people/:id", function(req,res){
  res.render("people/show", {person: {} });
});

app.get("/people/:id/edit", function(req,res){
  res.render("people/edit", {id: req.params.id});
});

app.post("/people/update", function(req, res){
  // console.log( req.body );
  Person.updateById(req.body.firstname, req.body.lastname, req.body.id, function(err, res) {
    console.log(req.body);    
  });
  res.redirect("/people")
});

app.post("/people", function(req, res){
  console.log( req );
  Person.create(req.body, function(err, res) {
    console.log(req.body);    
  });
  res.redirect("/people")
});

app.post("/delete/:id", function(req, res) {
  Person.destroyById(req.params.id, function(err,res) {
      console.log("deleting", req.params.id);
  });
  res.redirect("/people");
});

// app.delete("/people/:id", function(req, res){
//   res.redirect("/people");
// });

app.put("/people/:id", function(req,res){
  res.redirect("/people");
})

app.listen(3000, function(){
  console.log("THE SERVER IS LISTENING ON localhost:3000");
});
