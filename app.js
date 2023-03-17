const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
require("./db");

const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Servidor rodando na porta " + port);
});