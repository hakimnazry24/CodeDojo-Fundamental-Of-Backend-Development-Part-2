const path = require("path");
const database_path = path.join(__dirname, "product.db");

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database(database_path);

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Product (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        type TEXT NOT NULL,
        price REAL NOT NULL
    )`, (err) => console.log(err));

    db.run(`CREATE TABLE IF NOT EXISTS Owner (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        product_id INTEGER NOT NULL,
        FOREIGN KEY(product_id) REFERENCES Product(id)
    )`, (err) => console.log(err));

    // db.run(`INSERT INTO Product (name, type, price) VALUES (?, ?, ?)`, ["Maggi", "Food", 4.99]);
    // db.run(`INSERT INTO Product (name, type, price) VALUES (?, ?, ?)`, ["Vico", "Drink", 2.99]);
    // db.run(`INSERT INTO Product (name, type, price) VALUES (?, ?, ?)`, ["Mentos", "Candy", 1.99]);

    // db.run(`INSERT INTO Owner (name, product_id) VALUES (?, ?)`, ["Hakim", 1]);
    // db.run(`INSERT INTO Owner (name, product_id) VALUES (?, ?)`, ["Syazwan", 2]);
    // db.run(`INSERT INTO Owner (name, product_id) VALUES (?, ?)`, ["Faris", 3]);
});

module.exports = db;
