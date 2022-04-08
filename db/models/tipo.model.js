const { Model, DataTypes } = require('sequelize');

const TIPO_TABLE = 'tipos';

const TipoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
}

class Tipo extends Model {

  static associate(models) {
    this.hasOne(models.Archivo, {
      as: 'archivo',
      foreignKey: 'idTipo'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TIPO_TABLE,
      modelName: 'Tipo',
      timestamps: false
    }
  }
}

module.exports = { Tipo, TipoSchema, TIPO_TABLE };
