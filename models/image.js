'use strict';
const { 
    Model
   } = require ('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Image extends Model {


    static associate(models) {
        //define association here

        models.Image.belongsTo(models.Variant)

    
      }
    }
    Image.init({
    
        variantId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Image',
    });
    return Image;

    };
