'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      invoice.belongsTo( models.recipient, { foreignKey: 'recipient_id'})
      invoice.hasMany( models.sale, { foreignKey: 'invoice_no'})
    }
  };
  invoice.init({
    date: DataTypes.DATE,
    recipient_id: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'invoice',
  });
  return invoice;
};