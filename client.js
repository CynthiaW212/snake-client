const net = require("net");
const { IP, PORT,PLAYER_NAME } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT,// PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', ()=> {
    console.log("You have successfully connected to game server!");
    conn.write(`Name: ${PLAYER_NAME}`);
  });
  
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  return conn;
};

module.exports = {connect};