const express = require("express");
const app = express();
const db = require("./db");

app.get("/products", (req, res) => {
    db.all(`SELECT * FROM Product`, (err, rows) => {
        res.status(200).json(rows);
    });
});

app.get("/owners", (req, res) => {
    db.all(`SELECT * FROM Owner`, (err, rows) => {
        res.status(200).json(rows);
    });
});


module.exports = app;