const { Model, DataTypes, Sequelize } = require('sequelize');

const { USUARIO_TABLE } = require('./usuario.model');
const { AREA_TABLE } = require('./area.model');

const TRABAJADOR_TABLE = 'trabajadores';
const TrabajadorSchema =  {
  dni: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  nombre: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  apellido: {
    allowNull: false,
    type: DataTypes.STRING
  },
  direccion: {
    allowNull: false,
    type: DataTypes.STRING
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  telefono: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  cargo: {
    allowNull: false,
    type: DataTypes.STRING
  },
  fechaCreacion: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_creacion',
    defaultValue: Sequelize.NOW,
  },
  idUsuario: {
    field: 'id_usuario',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USUARIO_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  idArea: {
    field: 'id_area',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: AREA_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Trabajador extends Model {

  static associate(models) {
    //this.belongsTo(models.Usuario, {as: 'usuario'});
    //this.belongsTo(models.Area, {as: 'area'});
    this.hasMany(models.Prestamo, {
      as: 'prestamos',
      foreignKey: 'idTrabajador'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TRABAJADOR_TABLE,
      modelName: 'Trabajador',
      timestamps: false
    }
  }
}

module.exports = { Trabajador, TrabajadorSchema, TRABAJADOR_TABLE };
