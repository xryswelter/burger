//Set All Require
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./controllers/catsController.js");
const handlebars = require("express-handlebars");
const PORT = process.env.PORT || 8080;
const app = express();
//{Insert cookiecut from other apps in class}
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//Use of handlbar code f
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
