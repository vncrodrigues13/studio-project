const pg = require('pg')

var conString = "postgres://gneounmr:AKG8hbKUBhEvBQe4Go1Q3M7xItC70oxV@tuffi.db.elephantsql.com:5432/gneounmr"
var elephantconnection = new pg.Client(conString);

module.exports = elephantconnection

