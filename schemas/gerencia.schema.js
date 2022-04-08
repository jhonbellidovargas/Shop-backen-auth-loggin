const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().required();
const idLocal = Joi.number().integer();

const createGerenciaSchema = Joi.object({
  nombre: nombre.required(),
  idLocal: idLocal.required(),
});

const updateGerenciaSchema = Joi.object({
  nombre: nombre,
});

const getGerenciaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createGerenciaSchema, updateGerenciaSchema, getGerenciaSchema }
