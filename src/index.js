import http from 'http';
import '@babel/polyfill';

const requestHandler = function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World! you idiots!');
};
const server = http.createServer(requestHandler);
server.listen(8080);
