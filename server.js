const express = require("express");

const app = express();

const PORT = 4000;


app.listen(() => {
    console.log("Hi from port " + PORT)
})