var express = require('express');
var router = express.Router();
const { Client, Query } = require('pg')
var username = "postgres" // sandbox username
var password = "mysecretpassword" // read only privileges on our table
var host = "172.17.0.2:5432" // pachekot postgres IP 172.17.0.3 postgiss
var database = "postgres" // database name
var conString = "postgres://"+username+":"+password+"@"+host+"/"+database; // Your Database Connection
var taetrst = "SELECT ST_AsText(coordinates) AS type FROM testingcoords"; // testingcoords; correctolocation
//var asdfasdfasdf = "SELECT ST_AsGeoJSON(coordinates) as type FROM testingcoords";
// var tasdfasdfa = "SELECT ST_X(coordinates), ST_Y(coordinates) FROM correctolocation";
var hksfgh = "SELECT row_to_json(fc) FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM (SELECT 'Feature' As type, ST_AsGeoJSON(lg.geog)::json As geometry, row_to_json((loc_id, loc_name)) As properties FROM locationsworking As lg   ) As f )  As fc;"
//var asdfawdfasdf = "SELECT row_to_json(fc) FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM (SELECT 'Feature' As type, ST_AsGeoJSON(lg.geog)::json As geometry, row_to_json((SELECT l FROM (SELECT loc_id, loc_name) As l )) As properties FROM locationsworking As lg   ) As f )  As fc;"
var query_tojson = "SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM (SELECT 'Feature' As type, ST_AsGeoJSON(lg.geog)::json As geometry, row_to_json((SELECT l FROM (SELECT loc_id, loc_name) As l )) As properties FROM locationsworking As lg) As f ;"
/* testing
var klverijs = "SELECT * FROM global_points";
var queryMarkers = "SELECT id, json_build_object(lat, long) AS data FROM workingeo";
 */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ceļu Infrastruktūras pārvaldība' });
});
module.exports = router;
router.get('/data', function (req, res) {
  var client = new Client(conString);
  client.connect();
  var query = client.query(new Query(query_tojson));
  query.on("row", function (row, result) {
    result.addRow(row);
  });
  query.on("end", function (result) {
    res.send(result.rows[0]);
    res.end();
  });
});
/* GET the map page */
router.get('/map', function(req, res) {
  var client = new Client(conString); // Setup our Postgres Client
  client.connect(); // connect to the client
  var query = client.query(new Query(query_tojson)); // Run our Query
  query.on("row", function (row, result) {
    result.addRow(row);
  });
  // Pass the result to the map page
  query.on("end", function (result) {
    var data = result.rows[0]// Save the JSON as variable data
    res.render('map', {
      title: "Celu Infrastruktura", // Give a title to our page
      jsonData: data // Pass data to the View

    });
  });
});
