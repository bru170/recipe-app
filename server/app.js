const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'recipesadmin',
    database: 'recipes'
});

app.post('/register', (req, res) => {

    const {firstName, lastName, email, password} = req.body

    db.query("INSERT INTO user (firstname, lastname, email, password) VALUES (?,?,?,?)", 
    [firstName, lastName, email, password],
    (err, result) => {
        console.log(err);
        console.log(result);
    });
});

app.get('/login', (req, res) => {

    const {email, password} = req.body
    res.setHeader('content-type', 'application/json');

    db.query("SELECT * FROM user WHERE email = ? AND password = ?", 
    [email, password],
    (err, result) => {
        if(err) {
            res.send({err: err})
        }

        if (result) {
            res.send(result);
        } else {
            res.send({message: "Oops wrong email or password!"});
        }  
        console.log('hi')       
    }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`))
