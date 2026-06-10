const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  searchUserById,
  searchUserByName,
} = require("../controllers/userController");

const { login, logout, isAuth } = require("../controllers/login");

const {
  verificarUsuario,
  verificarToken,
} = require("../middleware/authMiddleware");

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:id", verificarToken, verificarUsuario, updateUser);
router.delete("/users/:id", verificarToken, verificarUsuario, deleteUser);
router.post("/users/searchByName", verificarToken, searchUserByName);
router.post("/users/searchById", verificarToken, searchUserById);
router.post("/login", login);
router.post("/logout", isAuth, logout);
router.get("/isAuth", isAuth);

module.exports = router;
