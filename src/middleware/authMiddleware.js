const auth = require("../auth");

function verificarUsuario(req, res, next) {
  const usuario = auth.getUsuario();
  if (usuario.username === "pass") {
    console.log("Este usuario esta autorizado");
    next(); // Creo que aca se ponen los parametros para saber si se deja pasar
  } else {
    res.status(401).json({ error: "No autorizado" });
  }
}
module.exports = { verificarUsuario };
