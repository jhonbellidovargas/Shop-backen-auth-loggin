const Joi = require('joi');

const id = Joi.number().integer();
const nombre = Joi.string().min(3).max(50);
const idGerencia = Joi.number().integer();

const createAreaSchema = Joi.object({
  nombre: nombre.required(),
  idGerencia: idGerencia.required(),
});

const updateAreaSchema = Joi.object({
  nombre: nombre,
});

const getAreaSchema = Joi.object({
  id: id.required(),
});

module.exports = { createAreaSchema, updateAreaSchema, getAreaSchema };
