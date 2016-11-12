"use strict";
let express = require('express');
let config = require('./config/config.js');
let request = require('request');
let _ = require('underscore');
let os = require('os');
let getIP = require('external-ip')();

// Create our app
let app = express();

let port = process.env.PORT || 3300

// app.use(function(req, res, next) {
//   if(req.headers['x-forwarded-proto'] === 'http') next();
//   else res.redirect('http://'+ req.hostname + req.url+ ':'+ req.o);
// });

app.listen(port, function () {
  console.log('Express server is up on port ' + port);
});

function getLocation(cb) {  
  getIP(function (err, ip) {
    if (err) {
        // every service in the list has failed
        cb(err);
    }
    request(config.DB_IP_URL + '/' + config.DB_IP_KEY + '/' + ip, (err, res, body)=> {
      let location = JSON.parse(body);
      cb(null, location.city);
    })
});
}

module.exports = {
  getLocation: getLocation
};


