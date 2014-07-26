var db = require('./db');

function Person(params) {            //constructor function
  this.firstname = params.firstname;
  this.lastname = params.lastname;
  this.id = params.id;
};


Person.all = function(callback){
  db.query("SELECT * FROM people",[], function(err, res){
    var allPeople = [];
    // do something here with res
    if (err) {
      console.log(err)
    }
    else {
      // console.log(res.rows);
      res.rows.forEach(function(sqlPersonRow){
        allPeople.push(new Person(sqlPersonRow));       
      });
    }
    callback(err, allPeople);
  });
}

Person.findBy = function(key, val, callback) {
//library rule, cannot use $sign notation for column names  
  db.query("SELECT * FROM people WHERE " + key + " = $1",[val], function(err, res){
    var foundRow;
    var foundPerson;
    // do something here with res
    if (err) {
      console.log(err)
    }
    else {
      //console.log(res.rows);
      foundPerson = res.rows[0];  
    }
    callback(err, foundPerson);
  });
};

Person.create = function(params, callback){
  db.query("INSERT INTO people (firstname, lastname) VALUES ($1,$2) RETURNING *", [params.firstname, params.lastname], function(err, res){
    var createdRow;
    var newPerson;
    if(err) {
      console.log(err);
    }
    else {
      console.log(res.rows);
    }
    callback(err, newPerson);
  });
};

Person.prototype.update = function(params, callback) {
  var colNames = [];
  var colVals = [];
  var count = 2;

  for(var key in this) {
    if(this.hasOwnProperty(key) && params[key] !== undefined){
      var colName = key + "=$" + count;
      colNames.push(colName);
      colVals.push(params[key]);
      count++;
    }
  }

  var statement = "UPDATE people SET " + colNames.join(", ") + " WHERE id=$1 RETURNING *";
  var values = [this.id].concat(colVals);
  console.log("Running:");
  console.log(statement, "with values", values);
  var _this = this;
  db.query(statement, values, function(err, res) {
    var updatedRow;
    if(err) {
      console.error("OOP! Something went wrong!", err);
    } else {
      updatedRow = res.rows[0];
      _this.firstname = updatedRow.firstname;
      _this.lastname = updatedRow.lastname;
    }
    callback(err, _this)
  });
}

Person.prototype.destroy = function( callback ) {
  // 
  console.log( 'Person.prototype.destroy', this.id );
  db.query("DELETE FROM people WHERE id=$1", [this.id], function(err, res) {
    if (err) {
      console.log(err)
    }
    else {
      console.log(res);
    }
  
    callback(err)
  });
}

module.exports = Person;
