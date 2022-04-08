'use strict';

// const { USER_TABLE } = require('./../models/user.model');
// const { CUSTOMER_TABLE } = require('./../models/customer.model');
// const { CATEGORY_TABLE } = require('./../models/category.model');
// const { PRODUCT_TABLE } = require('./../models/product.model');
// const { ORDER_TABLE } = require('./../models/order.model');
// const { ORDER_PRODUCT_TABLE } = require('./../models/order-product.model');
const { USUARIO_TABLE, UsuarioSchema } = require('./../models/usuario.model');
const { TRABAJADOR_TABLE, TrabajadorSchema } = require('./../models/trabajador.model');
const { AREA_TABLE, AreaSchema } = require('./../models/area.model');
const { GERENCIA_TABLE, GerenciaSchema } = require('./../models/gerencia.model');
const { LOCAL_TABLE, LocalSchema } = require('./../models/local.model');
const { ARCHIVO_TABLE, ArchivoSchema } = require('./../models/archivo.model');
const { PRESTAMO_TABLE, PrestamoSchema } = require('./../models/prestamo.model');
const { ESTADO_TABLE, EstadoSchema } = require('./../models/estado.model');
const { TIPO_TABLE, TipoSchema } = require('./../models/tipo.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ESTADO_TABLE, EstadoSchema);
    await queryInterface.createTable(TIPO_TABLE, TipoSchema);
    await queryInterface.createTable(LOCAL_TABLE, LocalSchema);
    await queryInterface.createTable(GERENCIA_TABLE, GerenciaSchema);
    await queryInterface.createTable(AREA_TABLE, AreaSchema);
    await queryInterface.createTable(USUARIO_TABLE, UsuarioSchema);
    await queryInterface.createTable(TRABAJADOR_TABLE, TrabajadorSchema);
    await queryInterface.createTable(ARCHIVO_TABLE, ArchivoSchema);
    await queryInterface.createTable(PRESTAMO_TABLE, PrestamoSchema);

  },

  down: async (queryInterface) => {
    // await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
    // await queryInterface.dropTable(ORDER_TABLE);
    // await queryInterface.dropTable(PRODUCT_TABLE);
    // await queryInterface.dropTable(CATEGORY_TABLE);
    // await queryInterface.dropTable(CUSTOMER_TABLE);
    // await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(ESTADO_TABLE);
    await queryInterface.dropTable(TIPO_TABLE);
    await queryInterface.dropTable(LOCAL_TABLE);
    await queryInterface.dropTable(GERENCIA_TABLE);
    await queryInterface.dropTable(AREA_TABLE);
    await queryInterface.dropTable(USUARIO_TABLE);
    await queryInterface.dropTable(TRABAJADOR_TABLE);
    await queryInterface.dropTable(ARCHIVO_TABLE);
    await queryInterface.dropTable(PRESTAMO_TABLE);
  }
};
