const express = require("express");
const start = require("./db/connect.js");
const app = express();
const router = require("./routes/route.js");
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

start();
app.use("/api", router);

app.listen(port, () => {
  console.log(`Listening on the ${port}`);
});
