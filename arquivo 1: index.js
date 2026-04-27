const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Funcionando 🚀");
});

const port = process.env.PORT || 8080;
app.listen(port, "0.0.0.0");
{
  "name": "leads-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
