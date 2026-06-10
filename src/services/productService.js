const connection = require("../config/database");

function obtenerProductos() {
  connection.query("SELECT * FROM products");
}

function crearProducto(producto) {
  connection.query("INSERT INTO products SET ?", producto);
}

function actualizarProducto(producto, id) {
  connection.query("UPDATE products SET ? WHERE id = ?", [producto, id]);
}

function eliminarProducto(id) {
  connection.query("DELETE FROM products WHERE id = ?", id);
}

module.exports = {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto,
};
