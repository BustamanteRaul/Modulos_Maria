const connection = require("../config/database");

function obtenerPedidos(callback) {
  connection.query("SELECT * FROM pedidos", callback);
}

function crearPedidos(pedido, callback) {
  connection.query("INSERT INTO pedidos SET ?", pedido, callback);
}

function actualizarPedido(pedido, id, callback) {
  connection.query(
    "UPDATE pedidos SET ? WHERE id_pedido = ?",
    [pedido, id],
    callback,
  );
}

function eliminarPedido(id, callback) {
  connection.query("DELETE FROM pedidos WHERE id_pedido = ?", id, callback);
}

function buscarPedidoPorUsuario(idUsuario, callback) {
  connection.query(
    "SELECT * FROM pedidos WHERE user_id = ?",
    idUsuario,
    callback,
  );
}

function buscarPedidoPorId(idPedido, callback) {
  connection.query(
    "SELECT * FROM pedidos WHERE id_pedido = ?",
    idPedido,
    callback,
  );
}

module.exports = {
  obtenerPedidos,
  crearPedidos,
  actualizarPedido,
  eliminarPedido,
  buscarPedidoPorUsuario,
  buscarPedidoPorId,
};
