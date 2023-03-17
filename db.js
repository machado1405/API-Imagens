const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set("strictQuery", true);

async function main() {
  const dbUser = process.env.DB_USER;
  const dbPass = process.env.DB_PASS;
  const dbConnect = `mongodb+srv://${dbUser}:${dbPass}@cluster0.nrel5ta.mongodb.net/?retryWrites=true&w=majority`;
  await mongoose.connect(dbConnect);
  console.log("Conectado ao banco de dados");
}

main().catch((err) => console.log(err));
module.exports = main;