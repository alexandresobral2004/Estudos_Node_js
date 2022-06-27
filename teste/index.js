var express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Config 
//template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Body Parser - 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas

app.get('/', function (req, res) {
  Post.findAll({ order: [['id', 'DESC']] }).then(function (posts) {
    res.render('home', { posts: posts })
  })
})

app.get('/cad', function (req, res) {
  res.render('formulario')//renderiza o formulario.handlebars
})

app.post('/add', function (req, res) {
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function () {
    res.redirect('/')
  }).catch(function (erro) {
    res.send('Houve um erro: ' + erro)
  })
})

app.listen(8081, function () {
  console.log('Server Inicido')
})

//Bibliotecas: nodemon, sequelize, body-parser
//npm install --save body-parser









//função do Callback: é executada sempre que um evento acontece

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/html/index.html')
// })


// app.get('/', function (req, res) {
//   res.send('<h2>Seja bem vindo ao meu app!!!!!</h2>')
// })

// app.get('/sobre', function (req, res) {
//   res.send('<h2>Minha página sobre</h2>')
// })

// app.get('/blog', function (req, res) {
//   res.send('<h2>Bem-vindo ao Meu Blog</h2>')
// })

// app.get('/hello/:cargo/:nome/:cor', function (req, res) {
//   res.send('<h2>Hello ' + req.params.cargo + '</h2>' + '<h2>Seu cargo é ' + req.params.nome + '</h2>' + '<h2>sua cor favorita é ' + req.params.cor + '</h2 >')


// })


