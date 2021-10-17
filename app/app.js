const express = require("express");
const http = require('http');

const app = express();
const SERVER_PORT = 3000;

const log = (endpoint, statusCode) => {
  console.log(`${endpoint} | ${statusCode} | ${new Date().toISOString()}`);
}

app.listen(SERVER_PORT, () => {
  console.log(`Listening at port ${SERVER_PORT}.`);
});

app.get("/ping", (req, res) => {
  log('PING', 200);
  res.status(200).send("PING" + '\n');
});

app.get('/bbox-1', (req, res) => {
  http.get('http://2c21-tp-1_bbox_1:9090/').on('response', (response) => {
    log('BBOX-1', response.statusCode);
    res.status(response.statusCode).send('BBOX-1' + '\n');
  })
});

app.get('/bbox-2', (req, res) => {
  http.get('http://2c21-tp-1_bbox_1:9091/').on('response', (response) => {
    log('BBOX-2', response.statusCode);
    res.status(response.statusCode).send('BBOX-2' + '\n');
  })
});

 app.get('/intensive', (req, res) => {
   let start = new Date();
   while ( ( (new Date().getTime() - start.getTime() ) / 1000 ) < 3);
   log('INTENSIVE', 200);
   res.status(200).send('INTENSIVE' + '\n')
 })

