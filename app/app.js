const express = require("express");

const app = express();
const SERVER_PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("ping");
});

app.listen(SERVER_PORT, () => {
  console.log(`Listening at port ${SERVER_PORT}.`);
});

app.get('/proxy-sincronico', (req, res) => {
  request.get('http://box:9090/').on('response', (response) => {
    console.log("proxy sincronico" + response.statusCode)
    res.status(response.statusCode).send("proxy sincronico")
  })
});

app.get('/proxy-asincronico', (req, res) => {
  request.get('http://box:9091/').on('response', (response) => {
    console.log("proxy asincronico" + response.statusCode)
    res.status(response.statusCode).send("proxy asincronico")
  })
});

app.get('/intensivo', (req, res) => {
  let start = new Date();
  while ((start.getSeconds() - (new Date()).getSeconds()) < 3) { }
  res.status(200).send('intensivo')
})