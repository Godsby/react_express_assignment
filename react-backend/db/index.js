var pgp = require('pg-promise')({});
var db = pgp('postgres://localhost:5432/userlist');
module.exports = db;