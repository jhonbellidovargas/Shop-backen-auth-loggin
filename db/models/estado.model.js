const { Model, DataTypes } = require('sequelize');

const ESTADO_TABLE = 'estados';

const EstadoSchema = {
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


class Estado extends Model {

  static associate(models) {
    this.hasOne(models.Archivo, {
      as: 'archivo',
      foreignKey: 'idEstado'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ESTADO_TABLE,
      modelName: 'Estado',
      timestamps: false
    }
  }
}

module.exports = { Estado, EstadoSchema, ESTADO_TABLE };
