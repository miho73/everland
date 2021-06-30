'use strict';

// Require NPM modules
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const favicon = require('serve-favicon');
var http = require('http');
const https = require('https');
const fs = require('fs');
const pg = require('pg');

// Require server modules
const resources = require('./modules/resources');

//express setup
const app = express();
app.use(favicon(__dirname + '/lib/etc/favicon.ico'));
app.set("view engine", "ejs");
app.use('/lib', express.static('./library'));
app.disable('x-powered-by');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Load server config
const configJSON = JSON.parse(fs.readFileSync('./config.json'));
const HTTP_PORT = configJSON.server.http_port;
const HTTPS_PORT = configJSON.server.https_port;
const EXTR_DOMAIN = configJSON.server.external_domain;

/*
// Redirect to HTTPS if not HTTPS
app.all('*', (req, res, next) => {
    let protocol = req.headers['x-forwarded-proto'] || req.protocol;
    if (protocol == 'https') next();
    else { let from = `${protocol}://${req.hostname}${req.url}`; 
        let to = `https://${EXTR_DOMAIN}${req.url}`;
        res.redirect(to); 
    }
});
*/
// index page handler

// lib directory handler
app.use('/lib', express.static('./lib'));

app.get('/', (req, res)=>{
    res.render('index.ejs');
});

app.get('/robots.txt', (req, res)=>{
    res.sendFile(__dirname+'/system/robots.txt');
});
app.get('/sitemap.xml', (req, res)=>{
    res.sendFile(__dirname+'/system/sitemap.xml');
});

// 404 Handler
app.use((req, res)=>{
    res.status(404).render('error.ejs', {
        error_code: 404,
        error_name: 'Not Found',
        error_explain: resources.text.error.e404
    });
});

/*
var options = {
    ca: fs.readFileSync(`/etc/letsencrypt/live/${EXTR_DOMAIN}/fullchain.pem`),
    key: fs.readFileSync(`/etc/letsencrypt/live/${EXTR_DOMAIN}/privkey.pem`),
    cert: fs.readFileSync(`/etc/letsencrypt/live/${EXTR_DOMAIN}/cert.pem`)
};
*/
app.listen(HTTP_PORT);
console.log("HTTP server listening on port " + HTTP_PORT);
/*
https.createServer(options, app).listen(HTTPS_PORT, function() {
    console.log("HTTPS server listening on port " + HTTPS_PORT);
});
*/
