const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string();

const createEstadoSchema = Joi.object({
  nombre: nombre.required(),
});

const updateEstadoSchema = Joi.object({
  nombre: nombre,
});

const getEstadoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createEstadoSchema, updateEstadoSchema, getEstadoSchema }
