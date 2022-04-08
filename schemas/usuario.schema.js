const Joi = require('joi');

const id = Joi.number().integer();
const rol = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(8);

const createUsuarioSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  rol: rol.required(),
});

const updateUsuarioSchema = Joi.object({
  email: email,
  password: password,
  rol: rol,
});

const getUsuarioSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUsuarioSchema, updateUsuarioSchema, getUsuarioSchema }
