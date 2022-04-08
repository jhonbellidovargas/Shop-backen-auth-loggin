const Joi = require('joi');

const id = Joi.number().integer();
const titulo = Joi.string();
const año = Joi.number().integer();
const folio = Joi.string();
const observacion = Joi.string();
const ubicacion = Joi.string();
const idTipo = Joi.number().integer();
const idEstado = Joi.number().integer();
const idArea = Joi.number().integer();

const createArchivoSchema = Joi.object({
  titulo: titulo.required(),
  año: año.required(),
  folio: folio.required(),
  observacion: observacion(),
  ubicacion: ubicacion(),
  idTipo: idTipo.required(),
  idEstado: idEstado.required(),
  idArea: idArea.required(),
});

const updateArchivoSchema = Joi.object({
  titulo: titulo,
  observacion: observacion,
  ubicacion: ubicacion,
  idEstado: idEstado,
});

const getArchivoSchema = Joi.object({
  id: id.required(),
});

module.exports = { createArchivoSchema, updateArchivoSchema, getArchivoSchema }
