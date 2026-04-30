const service = require("../services/service");
const auth = require("../auth");

function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Username y password son requeridos",
    });
  }

  service.login(username, password, (err, user) => {
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

    res.status(200).json(
      {
        success: true,
        message: "Login successful",
        user,
      },
      auth.setUsuario(user),
    );
  });
}

function logout(req, res) {}

module.exports = {
  login,
  logout,
};
