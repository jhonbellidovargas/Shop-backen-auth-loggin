const { Model, DataTypes, Sequelize } = require('sequelize');
// cambiado por mi
const USUARIO_TABLE = 'usuarios';

const UsuarioSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  rol: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'responsable'
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  recoveryToken: {
    field: 'recovery_token',
    allowNull: true,
    type: DataTypes.STRING
  },
  fechaCreacion: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_creacion',
    defaultValue: Sequelize.NOW
  }
}

class Usuario extends Model {
  static associate(models) {
    this.hasOne(models.Trabajador, {
      as: 'trabajadores',
      foreignKey: 'idUsuario'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false
    }
  }
}

module.exports = { USUARIO_TABLE, UsuarioSchema, Usuario }
