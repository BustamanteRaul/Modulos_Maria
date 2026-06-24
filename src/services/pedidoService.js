const connection = require("../config/database");

function obtenerPedidos(callback) {
  connection.query("SELECT * FROM pedidos", callback);
}

function crearPedido(pedido, callback) {
  connection.query("INSERT INTO pedidos SET ?", pedido, callback);
}

function actualizarPedido(id, pedido, callback) {
  let query = "UPDATE pedidos SET ";
  const values = [];

  if (pedido.fecha) {
    query += "fecha=?, ";
    values.push(pedido.fecha);
  }
  if (pedido.state) {
    query += "state=?, ";
    values.push(pedido.state);
  }
  if (pedido.total) {
    query += "total=?, ";
    values.push(pedido.total);
  }
  if (pedido.user_id) {
    query += "user_id=?, ";
    values.push(pedido.user_id);
  }

  if (values.length === 0) return callback(new Error("No fields to update"));

  query = query.slice(0, -2);
  query += " WHERE id_pedido=?";
  values.push(id);
  connection.query(query, values, callback);
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
  crearPedido,
  actualizarPedido,
  eliminarPedido,
  buscarPedidoPorUsuario,
  buscarPedidoPorId,
};
