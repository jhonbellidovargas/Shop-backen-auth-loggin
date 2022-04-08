const { Model, DataTypes, Sequelize } = require('sequelize');

const LOCAL_TABLE = 'locales';

const LocalSchema = {
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
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaCreacion: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'fecha_creacion',
    defaultValue: Sequelize.NOW,
  }
}


class Local extends Model {

  static associate(models) {
    this.hasOne(models.Gerencia, {
      as: 'gerencia',
      foreignKey: 'idLocal'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: LOCAL_TABLE,
      modelName: 'Local',
      timestamps: false
    }
  }
}

module.exports = { Local, LocalSchema, LOCAL_TABLE };
