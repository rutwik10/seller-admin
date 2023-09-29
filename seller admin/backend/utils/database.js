const SequelizePackage = require("sequelize");

const sequelize = new SequelizePackage("adminproducts", "root", "123456", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
