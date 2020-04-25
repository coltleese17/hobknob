import http from 'http';
import '@babel/polyfill';

const requestHandler = function(req, res) {
  if (req.method === 'POST' && req.url === '/users'){
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Payload should not be empty',
    }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World! you idiots!');
};
const server = http.createServer(requestHandler);
server.listen(8080);
