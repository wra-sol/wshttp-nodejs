import https from 'https';
import { WebSocketServer } from 'ws';
import express from 'express'

const app = express();

const server = https.createServer(app);

const wss = new WebSocketServer({ server });
wss.on('connection', function connection(ws) {
  console.log('Secure client connected');
  ws.on('message', function incoming(message) {
    console.log('received: %d bytes', message.length);
  });

  ws.on('close', () => console.log('Client disconnected'));
});

app.get('/', (req, res) => {
  res.send('Hello world!');
})

server.listen(process.env.PORT);