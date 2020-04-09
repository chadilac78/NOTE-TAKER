const express = require("express");
const path = require("path");
const app = express();
const db = require("./db/db.json")
var PORT = process.env.PORT || 3000;
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, "./public/index.html"))
});

app.get('/notes', (req, res) => {
    res.sendfile(path.join(__dirname, "./public/notes.html"))
});

// require("./routes/htmlRoutes.js")(app);
// require("./routes/apiRoutes")(app);

app.get('/api/notes', (req, res) => {
    console.log('call to api/notes')
    console.log(db)
    fs.readFile('db/db.json', 'utf-8', function (err, data) {
        if (err) throw err
        console.log(JSON.parse(data))
        return JSON.parse(data)
    })
    return res.json(db)

})

app.post('/api/notes', (req, res) => {
    console.log('post has been made')
    console.log(req)
    req.statusCode(204)
})



app.listen(PORT, function () {
    console.log(`App listening on PORT: ${PORT}`);
});
