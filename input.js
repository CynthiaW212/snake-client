//input.js
const { KEY_MATCHING } = require("./constants");

// setup interface to handle user input from stdin

// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (KEY_MATCHING[key]) {
    connection.write(KEY_MATCHING[key]);
  }
  if (key === '\u0003') {
    process.exit();
  }

};

module.exports = {setupInput};