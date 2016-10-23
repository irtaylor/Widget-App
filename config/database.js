'use strict';

// define's the uri for the server to connect to the database.
// process.env.MONGODB_URI is an environment variable used by Heroku for cloud deployment.
// the mongo daemon will connect on port 27017 by default. 
module.exports = process.env.MONGODB_URI || 'mongodb://localhost:27017';;
