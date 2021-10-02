const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Itmember extends Model {}

Itmember.init(
  {
    // 
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
  },
  itmember_name: {
      type: DataTypes.STRING,
      allowNull: false
  },
 
  itmember_phone: {
    type: DataTypes.STRING,
    allowNull: false
}

},
 {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Itmember',
  }
);

module.exports = Itmember;
