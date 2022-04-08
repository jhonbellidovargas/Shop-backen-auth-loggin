const { Model, DataTypes, Sequelize } = require('sequelize');
const { LOCAL_TABLE } = require('./local.model');

const GERENCIA_TABLE = 'gerencias';

const GerenciaSchema = {
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
  fechaCreacion: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_creacion',
    defaultValue: Sequelize.NOW,
  },
  idLocal: {
    field: 'id_local',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: LOCAL_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}


class Gerencia extends Model {

  static associate(models) {
    this.belongsTo(models.Local, {as: 'local'});
    this.hasMany(models.Area, {
      as: 'areas',
      foreignKey: 'idGerencia'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: GERENCIA_TABLE,
      modelName: 'Gerencia',
      timestamps: false
    }
  }
}

module.exports = { Gerencia, GerenciaSchema, GERENCIA_TABLE };
