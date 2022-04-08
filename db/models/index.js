const { Usuario, UsuarioSchema } = require('./usuario.model');
// const { Customer, CustomerSchema } = require('./customer.model');
// const { Category, CategorySchema } = require('./category.model');
// const { Product, ProductSchema } = require('./product.model');
// const { Order, OrderSchema } = require('./order.model');
// const { OrderProduct, OrderProductSchema } = require('./order-product.model');

const { Trabajador, TrabajadorSchema } = require('./trabajador.model');
const { Area, AreaSchema } = require('./area.model');
const { Gerencia, GerenciaSchema } = require('./gerencia.model');
const { Local, LocalSchema } = require('./local.model');
const { Archivo, ArchivoSchema } = require('./archivo.model');
const { Prestamo, PrestamoSchema } = require('./prestamo.model');
const { Estado, EstadoSchema } = require('./estado.model');
const { Tipo, TipoSchema } = require('./tipo.model');

function setupModels(sequelize) {
  // Customer.init(CustomerSchema, Customer.config(sequelize));
  // Category.init(CategorySchema, Category.config(sequelize));
  // Product.init(ProductSchema, Product.config(sequelize));
  // Order.init(OrderSchema, Order.config(sequelize));
  // OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  Trabajador.init(TrabajadorSchema, Trabajador.config(sequelize));
  Area.init(AreaSchema, Area.config(sequelize));
  Gerencia.init(GerenciaSchema, Gerencia.config(sequelize));
  Local.init(LocalSchema, Local.config(sequelize));
  Archivo.init(ArchivoSchema, Archivo.config(sequelize));
  Prestamo.init(PrestamoSchema, Prestamo.config(sequelize));
  Estado.init(EstadoSchema, Estado.config(sequelize));
  Tipo.init(TipoSchema, Tipo.config(sequelize));

  // Customer.associate(sequelize.models);
  // Category.associate(sequelize.models);
  // Product.associate(sequelize.models);
  // Order.associate(sequelize.models);

  Usuario.associate(sequelize.models);
  Trabajador.associate(sequelize.models);
  Area.associate(sequelize.models);
  Gerencia.associate(sequelize.models);
  Local.associate(sequelize.models);
  Archivo.associate(sequelize.models);
  Prestamo.associate(sequelize.models);
  Estado.associate(sequelize.models);
  Tipo.associate(sequelize.models);
}

module.exports = setupModels;
