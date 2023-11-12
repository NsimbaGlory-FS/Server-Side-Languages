'use strict';
const { 
    Model
   } = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Variant extends Model {


    static associate(models) {
        //define association here

        models.Variant.hasMany(models.Image)
        models.Variant.belongsTo(models.Product )

    
      }
    }
    Variant.init({
        title: DataTypes.STRING,
        price: DataTypes.FLOAT,
        productId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Variant',
    });
    return Variant;

    };
