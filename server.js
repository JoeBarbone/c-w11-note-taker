const express = require("express");
// const fs = require("fs");
// const { notes } = require("./db/db.json");


const PORT = process.env.PORT || 5500;
const app = express();
const apiRoutes = require("./routes/apiRoutes/index.js");
const htmlRoutes = require("./routes/htmlRoutes/index.js");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// I don't understand how this works. is apiRoutes the function it exectues when you run port:/api? apiRoutes is onyl a folder, how does it know which file to use?
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// const routes = require('./test-routes');

// app.use(routes)






app.listen(PORT, () => {
    console.log(`API Server now on port ${PORT}!`);
});