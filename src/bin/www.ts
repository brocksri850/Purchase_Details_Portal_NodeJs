//module dependencies
var server = require("../server");
var debug = require("debug")("express:server");
var http = require("http");
var https = require("https");
var fs = require("fs");
//create http server
var serverPort = normalizePort(process.env.PORT || 5000);
var app = server.Server.bootstrap().app;
app.set("port", serverPort);
if (app.get('env') === "production") {
    var options = {
        key: fs.readFileSync('private.key'),
        cert: fs.readFileSync('certificate.crt'),
        ca: fs.readFileSync('ca_bundle.crt'),
    };
    var server = https.createServer(options, app);
    console.log("Server:HTTPS");
} else {
    var server = http.createServer(app);
    console.log("Server:HTTP");
}
//listen on provided ports
server.listen(serverPort);

//add error handler
server.on("error", onError);

//start listening on port
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== "listen") {
        throw error;
    }

    var bind = typeof serverPort === "string" ?
        "Pipe " + serverPort :
        "Port " + serverPort;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string" ?
        "pipe " + addr :
        "port " + addr.port;
    debug("Listening on " + bind);
    console.log("Server Listening on " + bind);
}