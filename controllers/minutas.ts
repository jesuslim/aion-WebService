import { Request, Response } from "express";

/**
 * Obtiene todas las minutas
 * @param {Request} req - Request objeto de Express
 * @param {Response} res - Response objeto de Express
 * @returns {Response} - El objeto Response con las minutas disponibles
 */

export const getMinutas = (req: Request, res: Response) => {
  res.json({
    msg: "getMinutas",
  });
};

/**
 * Obtiene una minuta por su id
 * @param {Request} req - Request objeto de Express
 * @param {Response} res - Response objeto de Express
 * @returns {Response} - El objeto Response con la minuta solicitada
 */
export const getMinuta = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "getMinuta",
    id,
  });
};

/**
 * Crea una minuta
 * @param {Request} req - Request objeto de Express
 * @param {Response} res - Response objeto de Express
 * @returns {Response} - El objeto Response con el mensaje de confirmaci n
 */
export const postMinuta = (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    msg: "postMinuta",
    body,
  });
};

/**
 * Actualiza una minuta
 * @param {Request} req
 * @param {Response} res
 * @returns {Response} Respuesta con la minuta actualizada
 */
export const patchMinuta = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    msg: "patchMinuta",
    id,
    body,
  });
};

/**
 * Borrar una minuta por id
 * @param {Request} req
 * @param {Response} res
 */
export const deleteMinuta = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "deleteMinuta",
    id,
  });
};
