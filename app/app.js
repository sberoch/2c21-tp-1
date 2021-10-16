const express = require("express");
const http = require('http')

const app = express();
const SERVER_PORT = 3000;

app.listen(SERVER_PORT, () => {
  console.log(`Listening at port ${SERVER_PORT}.`);
});

app.get("/ping", (req, res) => {
  res.status(200).send("ping");
});

app.get('/proxy-sincronico', (req, res) => {
  http.get('http://2c21-tp-1_bbox_1:9090/').on('response', (response) => {
    console.log("proxy sincronico" + response.statusCode)
    res.status(response.statusCode).send("proxy sincronico")
  })
});

app.get('/proxy-asincronico', (req, res) => {
  http.get('http://2c21-tp-1_bbox_1:9091/').on('response', (response) => {
    console.log("proxy asincronico" + response.statusCode)
    res.status(response.statusCode).send("proxy asincronico")
  })
});

 app.get('/intensivo', (req, res) => {
   let start = new Date();
   while (new Date().getSeconds() - start.getSeconds() < 3);
   res.status(200).send('intensivo')
 })