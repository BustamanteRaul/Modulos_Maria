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
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProductById,
  searchProductByName,
} = require("../controllers/productController.js");

const { login, logout, isAuth } = require("../controllers/login");

const {
  verificarUsuario,
  verificarToken,
} = require("../middleware/authMiddleware");

//Rutas de usuario
router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:id", verificarToken, verificarUsuario, updateUser);
router.delete("/users/:id", verificarToken, verificarUsuario, deleteUser);
router.post("/users/searchByName", verificarToken, searchUserByName);
router.post("/users/searchById", verificarToken, searchUserById);
//Rutas de autenticacion
router.post("/login", login);
router.post("/logout", isAuth, logout);
router.get("/isAuth", isAuth);
//Rutas de producto con authenticacion
// router.get("/products", getProducts);
// router.post("/products", verificarToken, verificarUsuario, createProduct);
// router.put("/products/:id", verificarToken, verificarUsuario, updateProduct);
// router.delete("/products/:id", verificarToken, verificarUsuario, deleteProduct);
// router.post("/products/searchByName", verificarToken, searchProductByName);
// router.post("/products/searchById", verificarToken, searchProductById);
//Rutas de producto para probar sin auth
router.get("/products", getProducts);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.post("/products/searchByName", searchProductByName);
router.post("/products/searchById", searchProductById);
// para un producto del carrito en particular
// router.post(añadir al carrito)
// router.put(editar el carrito)
// router.delete(eliminar del carrito)
//
// para el carrito en general
// router.get(ver el carrito)
// router.delete(eliminar el carrito)(no creo que se use)
// router.post(comprar el carrito)(confirmacion de compra)

module.exports = router;
