const express = require('express')
const mysql= require('mysql')
const PORT = process.env.PORT || 3001
const cors = require('cors')
const app = express ()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "1-st-project"
})

db.connect(err => {
    if (err) {
        console.log(err);
        return err;
    }
    else{
        console.log('Database is Ok');
    }
})


let query = "SELECT * FROM `Reg`";
db.query(query, (err, result) => {
    console.log(err);
    console.log(result);
});

app. listen (PORT, () => {
console. log('this is serv http://localhost:3001/api')
})

app.get('/api', (req,res) => {
    res.json({
        message: "This is serv"
    })
})