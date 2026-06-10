const connection = require("../config/database");

function obtenerDetalle() {
  connection.query("SELECT * FROM detalles");
}

function crearDetalle(producto) {
  connection.query("INSERT INTO detalles SET ?", producto);
}

function actualizarDetalle(producto, id) {
  connection.query("UPDATE detalles SET ? WHERE id = ?", [producto, id]);
}

function eliminarDetalle(id) {
  connection.query("DELETE FROM detalles WHERE id = ?", id);
}

module.exports = {
  obtenerDetalle,
  crearDetalle,
  actualizarDetalle,
  eliminarDetalle,
};
