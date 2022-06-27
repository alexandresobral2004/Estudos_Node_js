var http = require('http')

http.createServer(function (req, res) {
  res.end('Olá Mundo!')

}).listen(8081)
console.log('Servidor Iniciado!')
