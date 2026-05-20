const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  searchUserById,
  searchUserByName,
} = require("../controllers/productController");

const { login, logout, isAuth } = require("../controllers/login");

const {
  verificarUsuario,
  verificarToken,
} = require("../middleware/authMiddleware");

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:id", verificarToken, updateUser);
router.delete("/users/:id", verificarToken, deleteUser);
router.post("/users/searchByName", searchUserByName);
router.post("/users/searchById", searchUserById);
router.post("/login", login);
router.post("/logout", isAuth, logout);
router.get("/isAuth", isAuth);

module.exports = router;
