var path = require("path");

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "public/index.html"));
    });

    // app.get("*", function (req, res) {
    //     res.sendfile('C:\Users\chadi\Desktop\NOTE-TAKER\Develop\public\index.html')
    // });

    // app.get("*", function (req, res) {
    //     res.sendFile(path.join(__dirname, "Develop/public/index.html"));
    // });

};

