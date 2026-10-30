const http = require('http');
// console.log(http);

const server = http.createServer((req, res) => {
  console.log('hello');
});

server.listen(3000, () => {
  console.log('server is running on', 3000);
});
