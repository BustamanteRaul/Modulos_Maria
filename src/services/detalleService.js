const connection = require("../config/database");

function obtenerDetalle(callback) {
  connection.query("SELECT * FROM detalles", callback);
}

function crearDetalle(producto, callback) {
  connection.query("INSERT INTO detalles SET ?", producto, callback);
}

function actualizarDetalle(producto, id, callback) {
  connection.query(
    "UPDATE detalles SET ? WHERE id = ?",
    [producto, id],
    callback,
  );
}

function eliminarDetalle(id, callback) {
  connection.query("DELETE FROM detalles WHERE id = ?", id, callback);
}

module.exports = {
  obtenerDetalle,
  crearDetalle,
  actualizarDetalle,
  eliminarDetalle,
};
