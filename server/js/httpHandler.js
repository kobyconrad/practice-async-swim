const fs = require("fs");
const path = require("path");
const headers = require("./cors");
const multipart = require("./multipartUtils");

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join(".", "background.jpg");
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = () => {}) => {
  console.log("Serving request type " + req.method + " for url " + req.url);

  switch (req.method) {
    case "GET":
      if (req.url === "/") {
        res.writeHead(200, headers);
        res.end("whoa dude this is the / end");
      }

      if (req.url === "/?command=random") {
        res.writeHead(200, headers);
        res.end(generateRandom());
      }
  }

  next(); // invoke next() at the end of a request to help with testing!
};

var generateRandom = () => {
  var options = ["up", "down", "left", "right"];
  var i = Math.floor(Math.random() * 4);
  return options[i];
};
