const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().required();

const createTipoSchema = Joi.object({
  nombre: nombre.required(),
});

const updateTipoSchema = Joi.object({
  nombre: nombre,
});

const getTipoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createTipoSchema, updateTipoSchema, getTipoSchema }
