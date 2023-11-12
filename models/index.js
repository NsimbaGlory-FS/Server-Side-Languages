'use strict';
const { 
    Model
   } = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {


    static associate(models) {
        //define association here

        models.Product.hasMany(models.Variant)

    
      }
    }
    Product.init({
        title: DataTypes.STRING,
        price: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;

    };
