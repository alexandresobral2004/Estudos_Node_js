//Conexão com o BD
const Sequelize = require('sequelize')
const sequelize = new Sequelize('postagens', 'root', '12345678', {
  host: "localhost",
  dialect: 'mysql',
  query: { raw: true }
})
//Senha server mysql: 12345678

//exportando constantes
module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}