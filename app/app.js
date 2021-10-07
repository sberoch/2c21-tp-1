const express = require("express");

const app = express();
const SERVER_PORT = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World | Node App");
});

app.listen(SERVER_PORT, () => {
  console.log(`Listening at port ${SERVER_PORT}.`);
});
