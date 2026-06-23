const connection = require("../config/database");

function obtenerPedidos(callback) {
  connection.query("SELECT * FROM pedidos", callback);
}

function crearPedidos(pedido, callback) {
  connection.query("INSERT INTO pedidos SET ?", pedido, callback);
}

function actualizarPedidos(pedido, id, callback) {
  connection.query("UPDATE pedidos SET ? WHERE id = ?", [pedido, id], callback);
}

function eliminarPedidos(id, callback) {
  connection.query("DELETE FROM pedidos WHERE id = ?", id, callback);
}

module.exports = {
  obtenerPedidos,
  crearPedidos,
  actualizarPedidos,
  eliminarPedidos,
};
