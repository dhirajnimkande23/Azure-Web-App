const express = require('express');
const sql = require('mssql');

const app = express();

app.get('/', async (req, res) => {
    res.send("App running with DB connection");
});

app.listen(3000);
