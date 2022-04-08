const Joi = require('joi');

const id = Joi.number().integer();
const fechaDevolucion = Joi.date();
const observacionPrestamo = Joi.string();
const observacionDevolucion = Joi.string();
const estado = Joi.string();
const idArchivo = Joi.number().integer();
const idTrabajador = Joi.number().integer();

const createPrestamoSchema = Joi.object({
  fechaDevolucion: fechaDevolucion.required(),
  observacionPrestamo: observacionPrestamo(),
  idArchivo: idArchivo.required(),
  idTrabajador: idTrabajador.required(),
});

const updatePrestamoSchema = Joi.object({
  observacionDevolucion: observacionDevolucion,
  estado: estado.default('retornado'),
});

const getPrestamoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPrestamoSchema, updatePrestamoSchema, getPrestamoSchema }
