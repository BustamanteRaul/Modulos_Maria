const connection = require("../config/database");

function obtenerPedidos() {
  connection.query("SELECT * FROM pedidos");
}

function crearPedidos(pedido) {
  connection.query("INSERT INTO pedidos SET ?", pedido);
}

function actualizarPedidos(pedido, id) {
  connection.query("UPDATE pedidos SET ? WHERE id = ?", [pedido, id]);
}

function eliminarPedidos(id) {
  connection.query("DELETE FROM pedidos WHERE id = ?", id);
}

module.exports = {
  obtenerPedidos,
  crearPedidos,
  actualizarPedidos,
  eliminarPedidos,
};
