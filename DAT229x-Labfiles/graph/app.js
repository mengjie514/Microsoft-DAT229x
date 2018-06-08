"use strict";

var Gremlin = require('gremlin-secure');
var config = require("./config");

const client = Gremlin.createClient(
    443, 
    config.endpoint, 
    { 
        "session": false, 
        "ssl": true, 
        "user": `/dbs/${config.database}/colls/${config.collection}`,
        "password": config.primaryKey
    });

console.log('Running Drop');
client.execute('g.V().drop()', { }, (err, results) => {
  if (err) return console.error(err);
  console.log(results);
  console.log();

console.log('Running Add Vertex1'); 
client.execute("g.addV('person').property('id', 'dan@contoso.com').property('firstName', 'Dan').property('lastName', 'Drayton').property('age', 44)", { }, (err, results) => {
  if (err) return console.error(err);
  console.log(JSON.stringify(results));
  console.log();
});
    
console.log('Running Add Vertex2'); 
client.execute("g.addV('person').property('id', 'joann@contoso.com').property('firstName', 'Joanne').property('lastName', 'Chambers').property('age', 39)", { }, (err, results) => {
  if (err) return console.error(err);
  console.log(JSON.stringify(results));
  console.log();
});

  console.log('Running Add Vertex3'); 
  client.execute("g.addV('person').property('id', 'pedro@contoso.com').property('firstName', 'Pedro').property('lastName', 'Fielder').property('age', 39)", { }, (err, results) => {
    if (err) return console.error(err);
    console.log(JSON.stringify(results));
    console.log();


  console.log('Running Add Vertex4'); 
  client.execute("g.addV('person').property('id', 'rosie@contoso.com').property('firstName', 'Rosie').property('lastName', 'Reeves')", { }, (err, results) => {
    if (err) return console.error(err);
    console.log(JSON.stringify(results));
    console.log();


  console.log('Running Add Edge'); 
  client.execute("g.V('dan@contoso.com').addE('follows').to(g.V('joann@contoso.com'))", { }, (err, results) => {
    if (err) return console.error(err);
    console.log(JSON.stringify(results));
    console.log();


  console.log('Running Add Edge'); 
  client.execute("g.V('dan@contoso.com').addE('follows').to(g.V('rosie@contoso.com'))", { }, (err, results) => {
    if (err) return console.error(err);
    console.log(JSON.stringify(results));
    console.log();


  console.log('Running Add Edge'); 
  client.execute("g.V('rosie@contoso.com').addE('follows').to(g.V('pedro@contoso.com'))", { }, (err, results) => {
    if (err) return console.error(err);
    console.log(JSON.stringify(results));
    console.log();


  console.log('Running Add Edge'); 
  client.execute("g.V('joann@contoso.com').addE('follows').to(g.V('dan@contoso.com'))", { }, (err, results) => {
    if (err) return console.error(err);
    console.log(JSON.stringify(results));
    console.log();
      
  console.log('Finished!'); 
    });
  });
});
});
});
});
});