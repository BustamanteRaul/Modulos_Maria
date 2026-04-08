const db = require("../config/database");

// GET
const getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error del servidor" });
    }

    res.status(200).json({
      message: "Lista de productos",
      data: results
    });
  });
};

// POST
const createProduct = (req, res) => {
  const { name, price } = req.body;

  // VALIDACIÓN
  if (!name || price <= 0) {
    return res.status(400).json({ error: "Datos inválidos" });
  }

  const query = "INSERT INTO products (name, price) VALUES (?, ?)";

  db.query(query, [name, price], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error al crear producto" });
    }

    res.status(201).json({
      message: "Producto creado",
      data: result
    });
  });
};

// PUT
const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const query = "UPDATE products SET name=?, price=? WHERE id=?";

  db.query(query, [name, price, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error al actualizar" });
    }

    res.json({ message: "Producto actualizado" });
  });
};

// DELETE
const deleteProduct = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM products WHERE id=?", [id], (err) => {
    if (err) {
      return res.status(500).json({ error: "Error al eliminar" });
    }

    res.json({ message: "Producto eliminado" });
  });
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
};