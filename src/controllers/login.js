const service = require("../services/service");
const auth = require("../auth");

const jwt = require("jsonwebtoken");

function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username y password son requeridos",
    });
  }

  service.login(username, password, (err, user) => {
    console.log("Resultado de service.login:", { err, user });
    if (err)
      return res.status(500).json({
        success: false,
        message: "Error interno del servidor",
      });
    if (!user)
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });

    auth.setUsuario(user);
    req.session.isAuthenticated = true;
    req.session.user = user; //Es redundante con el SetUsuario? Tal vez, Lo voy a dejar porque lo que anda no se toca? tambien.

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    console.log("Token generado:", token);

    res.status(200).json({
      success: true,
      message: "Login successful",
      user,
      token: token,
    });
  });
}

function logout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        error: "Error al cerrar sesión",
      });
    }
    res.status(200).json({
      message: "Logout successful",
    });
  });
}

function isAuth(req, res, next) {
  console.log("Estado de la session: ", req.session.isAuthenticated);
  if (req.session.isAuthenticated === false) {
    return res.status(401).json({
      error: "Not authenticated. Please log in.",
    });
  }
  next();
}

module.exports = {
  login,
  logout,
  isAuth,
};
