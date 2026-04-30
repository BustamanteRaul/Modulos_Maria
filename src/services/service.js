const connection = require("../config/database");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

//const { connect } = require("../routes");

function login(username, password, callback) {
  connection.query(
    "SELECT * FROM users WHERE username=?",
    username,
    (err, results) => {
      if (err) return callback(err);
      if (results.length === 0) return callback(null, null);

      const user = results[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return callback(err);
        if (isMatch) return callback(null, user); //Estee es el ok
        return callback(null, null);
      });
    },
  );
}

function obtenerUsuarios(callback) {
  connection.query("SELECT * FROM users", callback);
}

function crearUsuario(usuario, callback) {
  connection.query("INSERT INTO users SET ?", usuario, callback);
}

function actualizarUsuario(id, username, password, callback) {
  let query = "UPDATE users SET ";
  const values = [];

  if (username) {
    query += "username=?, ";
    values.push(username);
  }

  if (password) {
    const hashed = bcrypt.hash(password, SALT_ROUNDS);
    query += "password=?, ";
    values.push(hashed);
  }

  query = query.slice(0, -2); // quitar coma
  query += " WHERE id=?";
  values.push(id);

  connection.query(query, values, callback);
}

function eliminarUsuario(id, callback) {
  connection.query("DELETE FROM users WHERE id=?", id, callback);
}

function buscarUsuarioPorNombre(username, callback) {
  connection.query(
    "SELECT * FROM users WHERE username LIKE CONCAT('%', ?, '%')",
    username,
    callback,
  );
}

function buscarUsuarioPorId(id, callback) {
  connection.query("SELECT * FROM users WHERE id=?", id, callback);
}

module.exports = {
  obtenerUsuarios,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
  buscarUsuarioPorNombre,
  buscarUsuarioPorId,
  login,
};
