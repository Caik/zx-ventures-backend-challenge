var express = require("express");

var server = express();

server.use("/", express.static(__dirname + "/html"));
server.use("/resources", express.static(__dirname + "/resources"));
server.use("/swagger", express.static(__dirname + "/swagger"));

server.listen(process.env.DOC_CONTAINER_PORT || 9002);
