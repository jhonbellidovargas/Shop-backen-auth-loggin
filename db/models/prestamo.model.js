const { Model, DataTypes, Sequelize } = require('sequelize');

const { ARCHIVO_TABLE } = require('./archivo.model');
const { TRABAJADOR_TABLE } = require('./trabajador.model');

const PRESTAMO_TABLE = 'prestamos';

const PrestamoSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  fechaPrestamo: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_prestamo',
    defaultValue: Sequelize.NOW,
  },
  fechaDevolucion: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_devolucion',
    defaultValue: Sequelize.NOW,
  },
  observacionPrestamo: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'observacion_prestamo',
  },
  observacionDevolucion: {
    type: DataTypes.TEXT,
    allowNull: true,
    field: 'observacion_devolucion',
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'prestado',
  },
  idArchivo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ARCHIVO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idTrabajador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TRABAJADOR_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
}

class Prestamo extends Model {

  static associate(models) {
    this.belongsTo(models.Archivo, { as: 'archivo' });
    this.belongsTo(models.Trabajador, { as: 'trabajador' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRESTAMO_TABLE,
      modelName: 'Prestamo',
      timestamps: false
    }
  }
}

module.exports = { Prestamo, PrestamoSchema, PRESTAMO_TABLE };
