const auth = require("../auth"); // No se usa actualmente, pero se mantiene por si se necesita después
const jwt = require("jsonwebtoken");

function verificarUsuario(req, res, next) {
  console.log(
    "El usuario que llega a el verificarUsuario es:",
    req.session.user,
  );
  if (req.session.user.username === "prueba") {
    console.log("Este usuario esta autorizado");
    next();
  } else {
    return res.status(401).json({ error: "No autorizado" });
  }
}

function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;
  console.log("authHeader:", authHeader);
  if (!authHeader) {
    return res.status(401).json({
      success: false,
      error: "Token requerido",
    });
  }
  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
    if (err) {
      return res.status(403).json({
        success: false,
        error: "Token inválido",
      });
    }
    req.usuario = usuario;
    next();
  });
}

module.exports = { verificarUsuario, verificarToken };
