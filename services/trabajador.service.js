const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { models } = require('../libs/sequelize');

class TrabajadorService {

  constructor() {}

  async find() {
    const rta = await models.Trabajador.findAll({
      //include: ['usuario']
    });
    return rta;
  }

  async findOne(id) {
    const trabajador = await models.Trabajador.findByPk(id);
    if (!trabajador) {
      throw boom.notFound('Trabajador no encontrado');
    }
    return trabajador;
  }

  async create(data) {
    const hash = await bcrypt.hash(data.usuario.password, 10);
    const newData = {
      ...data,
      usuario: {
        ...data.usuario,
        password: hash
      }
    }
    const newTrabajador = await models.Trabajador.create(newData, {
      //include: ['usuario']
    });
    delete newTrabajador.dataValues.usuario.dataValues.password;
    return newTrabajador;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const trabajador = await this.findOne(id);
    await trabajador.destroy();
    return { rta: true };
  }

}

module.exports = TrabajadorService;
