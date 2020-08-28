const pg = require("pg");
const env = require("dotenv").config();

// grab the URL for our local database
let connectionString = process.env.DATABASE_URL;

// test string
if (process.env.NODE_ENV === "test") {
	connectionString = process.env.TEST_DATABASE_URL;
}

const db = new pg.Pool({
	connectionString,
});

module.exports = db;
