const connection = require("../config/database");

function obtenerDetalles(callback) {
  connection.query("SELECT * FROM detalles", callback);
}

function crearDetalle(detalle, callback) {
  connection.query("INSERT INTO detalles SET ?", detalle, callback);
}

function actualizarDetalle(detalle, id, callback) {
  let query = "UPDATE detalles SET ";
  const values = [];

  if (detalle.product_id) {
    query += "product_id=?, ";
    values.push(detalle.product_id);
  }
  if (detalle.pedido_id) {
    query += "pedido_id=?, ";
    values.push(detalle.pedido_id);
  }
  if (detalle.quantity) {
    query += "quantity=?, ";
    values.push(detalle.quantity);
  }

  if (values.length === 0) return callback(new Error("No fields to update"));

  query = query.slice(0, -2);
  query += " WHERE id_detalle=?";
  values.push(id);
  connection.query(query, values, callback);
}

function eliminarDetalle(id, callback) {
  connection.query("DELETE FROM detalles WHERE id_detalle = ?", id, callback);
}

function buscarDetallePorPedido(idPedido, callback) {
  connection.query(
    "SELECT * FROM detalles WHERE pedido_id = ?",
    idPedido,
    callback,
  );
}

function buscarDetallePorId(idDetalle, callback) {
  connection.query(
    "SELECT * FROM detalles WHERE id_detalle = ?",
    idDetalle,
    callback,
  );
}

module.exports = {
  obtenerDetalles,
  crearDetalle,
  actualizarDetalle,
  eliminarDetalle,
  buscarDetallePorPedido,
  buscarDetallePorId,
};
