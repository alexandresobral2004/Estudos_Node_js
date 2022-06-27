// CRIA CONEXÃO COM O BANCO DE DADOS
// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('test', 'root', '12345678', {
//   host: "localhost",
//   dialect: 'mysql'
// })
// //Senha server mysql: 12345678
// sequelize.authenticate().then(function () {
//   console.log('Conexão Realizada!')
// }).catch(function (erro) {
//   console.log('Erro ao se conectar!' + erro)
// })


// const Postagem = sequelize.define('postagens', {
//   titulo: {
//     type: Sequelize.STRING
//   },
//   conteudo: {
//     type: Sequelize.TEXT
//   }
// })

////Cria a tabela postagens no Banco de Dados
// Postagem.sync({ force: true })

//Insere dados na tabela postagens
// Postagem.create({
//   titulo: 'Bem-vindo ao Mundo Node.js',
//   conteudo: 'Estamos no curso de Node.JS, aproveite!!'
// })


// const Usuario = sequelize.define('usuarios', {
//   nome: {
//     type: Sequelize.STRING
//   },
//   sobrenome: {
//     type: Sequelize.STRING
//   },
//   idade: {
//     type: Sequelize.INTEGER
//   },
//   email: {
//     type: Sequelize.STRING
//   }
// })

//Cria a tabela usuarios no Banco de Dados
// Usuario.sync({ force: true })

//Insere dados na tabela usuarios do BD
// // Usuario.create({
// // //   nome: 'Alexandre ',
// // //   sobrenome: 'Rocha',
// // //   idade: 40,
// // //   email: 'alexandresobral2004@gmil.com'
// // // })