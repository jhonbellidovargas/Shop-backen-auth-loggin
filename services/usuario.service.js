const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const { models } = require('./../libs/sequelize');

class UsuarioService {
  constructor() {}

  async create(data) {
    const hash = await bcrypt.hash(data.password, 10);
    const newUsuario = await models.Usuario.create({
      ...data,
      password: hash
    });
    // eliminamos la propiedad password
    // delete newUsuario.dataValues.password;
    return newUsuario;
  }

  async find() {
    const rta = await models.Usuario.findAll({
      //include: ['trabajador']
    });
    return rta;
  }

  async findByEmail(email) {
    const rta = await models.Usuario.findOne({
      where: { email }
    });
    return rta;
  }

  async findOne(id) {
    const usuario = await models.Usuario.findByPk(id);
    if (!usuario) {
      throw boom.notFound('usuario no encontrado');
    }
    return usuario;
  }

  async update(id, changes) {
    const usuario = await this.findOne(id);
    const rta = await usuario.update(changes);
    return rta;
  }

  async delete(id) {
    const usuario = await this.findOne(id);
    await usuario.destroy();
    return { id };
  }
}

module.exports = UsuarioService;
