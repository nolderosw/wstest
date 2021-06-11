const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 80 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    setTimeout(function timeout() {
        ws.send(Date.now());
      }, 500);
  });

  ws.send('something');
});