const { Model, DataTypes, Sequelize } = require('sequelize');
const { GERENCIA_TABLE } = require('./gerencia.model');

const AREA_TABLE = 'areas';

const AreaSchema = {
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
  idGerencia: {
    field: 'id_gerencia',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: GERENCIA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}


class Area extends Model {

  static associate(models) {
    this.belongsTo(models.Gerencia, {as: 'gerencia'});
    // esto sera archivs
    this.hasMany(models.Archivo, {
      as: 'archivos',
      foreignKey: 'idArea'
    });
    this.hasMany(models.Trabajador, {
      as: 'trabajadores',
      foreignKey: 'idArea'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: AREA_TABLE,
      modelName: 'Area',
      timestamps: false
    }
  }
}

module.exports = { Area, AreaSchema, AREA_TABLE };
