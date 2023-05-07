const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: '50541',// PORT number here,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', ()=> {
    console.log("You have successfully connected to game server!");
    conn.write("Name: CYN");

    // conn.write('Move: up');//---Just for practice----
    // setTimeout(()=>{
    //   conn.write('Move: up');
    // },500);
    // setInterval(()=>{
    //   conn.write('Move: left');
    // },500);
    // conn.write('Move: up');
    // conn.write('Move: left');
    // conn.write('Move: down');
    // conn.write('Move: right');

  });
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  return conn;
};

module.exports = connect;