const express = require("express")
const cors = require("cors")
const app = express();
var corsOptions = {
  origin: "http://localhost:3000"
};
app.set('view engine','ejs'); 

app.engine('ejs', require('ejs').__express);
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
require("./src/routes/routes.js")(app)

// simple route
app.get("/", (req, res) => {
  res.json({ message: "running" });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


