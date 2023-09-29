const SequelizePackage = require('sequelize')
const sequelize = require('../utils/database')

const Product = sequelize.define('product',{
    id:{
        type:SequelizePackage.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    productTitle:{
        type:SequelizePackage.STRING,
        allowNull:false
    },
    productPrice:{
        type:SequelizePackage.INTEGER,
        allowNull:false
    },
    productCatagory:{
        type:SequelizePackage.STRING,
        allowNull:false
    },

})

module.exports = Product;