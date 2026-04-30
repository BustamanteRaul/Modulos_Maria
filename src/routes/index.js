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

const { login } = require("../controllers/login");

const { verificarUsuario } = require("../middleware/authMiddleware");

console.log("verificarUsuario:", typeof verificarUsuario, verificarUsuario);
console.log("updateUser:", typeof updateUser, updateUser);

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:id", verificarUsuario, updateUser);
router.delete("/users/:id", verificarUsuario, deleteUser);
router.post("/users/searchByName", searchUserByName);
router.post("/users/searchById", searchUserById);
router.post("/login", login);

module.exports = router;
