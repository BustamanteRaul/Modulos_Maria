const service = require("../services/detalleService");

function getDetalles(req, res) {
  service.obtenerDetalles((err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Error al obtener Detalles",
      });
    }

    res.status(200).json({
      success: true,
      message: "Detalles obtenidos correctamente",
      data: results,
    });
  });
}

function createDetalle(req, res) {
  try {
    const { product_id, pedido_id, quantity } = req.body;

    if (!product_id || !pedido_id) {
      return res.status(400).json({
        success: false,
        message: "product_id y pedido_id son obligatorios",
      });
    }

    service.crearDetalle(
      { product_id, pedido_id, quantity },
      (err, results) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Error al crear detalle",
          });
        }

        res.status(200).json({
          success: true,
          message: "Detalle creado correctamente",
          data: results,
        });
      },
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al crear detalle",
    });
  }
}

function updateDetalle(req, res) {
  try {
    const { id } = req.params;
    const { product_id, pedido_id, quantity } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "id es obligatorio",
      });
    }

    if (!product_id || !pedido_id) {
      return res.status(400).json({
        success: false,
        message: "product_id y pedido_id son obligatorios",
      });
    }

    service.actualizarDetalle(
      id,
      { product_id, pedido_id, quantity },
      (err, results) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Error al actualizar detalle",
          });
        }

        res.status(200).json({
          success: true,
          message: "Detalle actualizado correctamente",
          data: results,
        });
      },
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al actualizar detalle",
    });
  }
}

function deleteDetalle(req, res) {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "id es obligatorio",
      });
    }

    service.eliminarDetalle(id, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error al eliminar detalle",
        });
      }
      if (!results || results.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Detalle no encontrado",
        });
      }
      res.status(200).json({
        success: true,
        message: "Detalle eliminado correctamente",
        data: results,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al eliminar detalle",
    });
  }
}

function searchDetalleByPedido(req, res) {
  try {
    const { pedidoId } = req.params;

    if (!pedidoId) {
      return res.status(400).json({
        success: false,
        message: "pedidoId es obligatorio",
      });
    }

    service.buscarDetallePorPedido(pedidoId, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error al buscar detalle",
        });
      }
      if (!results || results.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Detalle no encontrado",
        });
      }
      res.status(200).json({
        success: true,
        message: "Detalle encontrado correctamente",
        data: results,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al buscar detalle",
    });
  }
}

function searchDetalleById(req, res) {
  try {
    const { idPedido } = req.params;

    if (!idPedido) {
      return res.status(400).json({
        success: false,
        message: "idPedido es obligatorio",
      });
    }

    service.buscarDetallePorId(idPedido, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Error al buscar detalle",
        });
      }
      if (!results || results.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Detalle no encontrado",
        });
      }
      res.status(200).json({
        success: true,
        message: "Detalle encontrado correctamente",
        data: results,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error al buscar detalle",
    });
  }
}

module.exports = {
  getDetalles,
  createDetalle,
  updateDetalle,
  deleteDetalle,
  searchDetalleByPedido,
  searchDetalleById,
};
