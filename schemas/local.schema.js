const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(3);
const direccion = Joi.string().min(3);


const createLocalSchema = Joi.object({
  nombre: nombre.required(),
  direccion: direccion.required(),
});

const updateLocalSchema = Joi.object({
  nombre: nombre,
  direccion: direccion,
});

const getLocalSchema = Joi.object({
  id: id.required(),
});

module.exports = { createLocalSchema, updateLocalSchema, getLocalSchema }
