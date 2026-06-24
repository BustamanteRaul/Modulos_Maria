const connection = require("../config/database");

function obtenerDetalles(callback) {
  connection.query("SELECT * FROM detalles", callback);
}

function crearDetalle(producto, callback) {
  connection.query("INSERT INTO detalles SET ?", producto, callback);
}

function actualizarDetalle(producto, id, callback) {
  connection.query(
    "UPDATE detalles SET ? WHERE id_detalle = ?",
    [producto, id],
    callback,
  );
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
