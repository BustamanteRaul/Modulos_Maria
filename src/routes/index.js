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

router.get("/users", getUsers);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);
router.post("/users/searchByName", searchUserByName);
router.post("/users/searchById", searchUserById);
router.post("/login", login);

module.exports = router;
