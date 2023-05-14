const express = require('express');
const mysql = require('mysql2');

//const db = require('./config/connection');
const sequelize = require('./config/connection');

const port = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'sample_db'
    },
    console.log(`Connected to the sample_db database.`)
);

db.query('SELECT * FROM sample_menu', function (err, results) {
    console.log(results);
});

db.query('SELECT * FROM sample_menu2', function (err, results) {
    console.log(results);
});

app.use((req, res) => {
    res.status(404).end();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});  

sequelize.sync().then(() => {
    app.listen(port, () => console.log(`App listening on port ${port}!`));
});