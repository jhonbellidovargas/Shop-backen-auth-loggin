const { Model, DataTypes, Sequelize } = require('sequelize');

const { ESTADO_TABLE } = require('./estado.model');
const { TIPO_TABLE } = require('./tipo.model');
const { AREA_TABLE } = require('./area.model');

const ARCHIVO_TABLE = 'archivos';

const ArchivoSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  año: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  folio: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'sin folio',
  },
  observacion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaCreacion: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_creacion',
    defaultValue: Sequelize.NOW,
  },
  // disponibilidad: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  //   defaultValue: 'disponible',
  // },
  idEstado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ESTADO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idTipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TIPO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idArea: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AREA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Archivo extends Model {

  static associate(models) {
    this.belongsTo(models.Estado, { as: 'estado' });
    this.belongsTo(models.Tipo, { as: 'tipo' });
    this.belongsTo(models.Area, { as: 'area' });
    this.hasMany(models.Prestamo, {
      as: 'prestamos',
      foreignKey: 'idArchivo'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ARCHIVO_TABLE,
      modelName: 'Archivo',
      timestamps: false
    }
  }
}

module.exports = { Archivo, ArchivoSchema, ARCHIVO_TABLE };
