const Joi = require('joi');

const dni = Joi.number().integer().max(99999999);
const nombre = Joi.string();
const apellido = Joi.string();
const direccion = Joi.string();
const email = Joi.string().email();
const telefono = Joi.string();
const cargo = Joi.string();
const idArea = Joi.number().integer();
const idUsuario = Joi.number().integer();


const createTrabajadorSchema = Joi.object({
  dni: dni.required(),
  nombre: nombre.required(),
  apellido: apellido.required(),
  direccion: direccion.required(),
  email: email.required(),
  telefono: telefono.required(),
  cargo: cargo.required(),
  idArea: idArea.required(),
  idUsuario: idUsuario,
});

const updateTrabajadorSchema = Joi.object({
  direccion: direccion,
  email: email,
  telefono: telefono,
  cargo: cargo,
});

const getTrabajadorSchema = Joi.object({
  dni: dni,
});

module.exports = { createTrabajadorSchema, updateTrabajadorSchema, getTrabajadorSchema }
