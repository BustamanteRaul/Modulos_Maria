const service = require("../services/pedidoService");

function getPedidos(req, res) {
  service.obtenerPedidos((err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error al obtener Pedidos",
      });
    }

    res.status(200).json({
      success: true,
      message: "Pedidos obtenidos correctamente",
      data: results,
    });
  });
}

function createPedido(req, res) {
  try {
    const { fecha, state, total, user_id } = req.body;

    if (!fecha || !state || !total || !user_id) {
      return res.status(400).json({
        success: false,
        message: "fecha, state, total y user_id son obligatorios",
      });
    }

    service.crearPedido({ fecha, state, total, user_id }, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error al crear pedido",
        });
      }

      res.status(200).json({
        success: true,
        message: "Pedido creado correctamente",
        data: results,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear pedido",
    });
  }
}

function updatePedido(req, res) {
  try {
    const { id } = req.params;
    const { fecha, state, total, user_id } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "id es obligatorio",
      });
    }

    if (!fecha || !state || !total || !user_id) {
      return res.status(400).json({
        success: false,
        message: "fecha, state, total y user_id son obligatorios",
      });
    }

    service.actualizarPedido(
      id,
      { fecha, state, total, user_id },
      (err, results) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Error al actualizar pedido",
          });
        }

        res.status(200).json({
          success: true,
          message: "Pedido actualizado correctamente",
          data: results,
        });
      },
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al actualizar pedido",
    });
  }
}

function deletePedido(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "id es obligatorio",
      });
    }

    service.eliminarPedido(id, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error al eliminar pedido",
        });
      }
      if (!results || results.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Pedido no encontrado",
        });
      }
      res.status(200).json({
        success: true,
        message: "Pedido eliminado correctamente",
        data: results,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al eliminar pedido",
    });
  }
}

function searchPedidoByUser(req, res) {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId es obligatorio",
      });
    }

    service.buscarPedidoPorUsuario(userId, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error al buscar pedido",
        });
      }
      if (!results || results.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Pedido no encontrado",
        });
      }
      res.status(200).json({
        success: true,
        message: "Pedido encontrado correctamente",
        data: results,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al buscar pedido",
    });
  }
}

function searchPedidoById(req, res) {
  try {
    const { idPedido } = req.params;

    if (!idPedido) {
      return res.status(400).json({
        success: false,
        message: "idPedido es obligatorio",
      });
    }

    service.buscarPedidoPorId(idPedido, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error al buscar pedido",
        });
      }
      if (!results || results.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Pedido no encontrado",
        });
      }
      res.status(200).json({
        success: true,
        message: "Pedido encontrado correctamente",
        data: results,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al buscar pedido",
    });
  }
}

module.exports = {
  getPedidos,
  createPedido,
  updatePedido,
  deletePedido,
  searchPedidoByUser,
  searchPedidoById,
};
