const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const client = require('mongodb').MongoClient;

// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));

    // client.connect("mongodb://localhost:27017/", function (err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("test");
    //     dbo.collection("users").find({}).toArray(function (err, result) {
    //         if (err) throw err;
    //         console.log(result[0].name)
    //         res.send(result[0].name)
    //         db.close();
    //     });
    // });


})

app.listen(port, () => {
    console.log('listening on 3000')
})