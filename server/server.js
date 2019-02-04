var http = require('http');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});

function accept(req, res) {

  if(!req.url.startsWith('/data/')) {

  file.serve(req, res);
  return ;

  }

  setTimeout(() => {
    file.serve(req, res);
  }, 5000);
}

http.createServer(accept).listen(3000);

console.log('Server running on port 3000');