//aca van a estar los controladores para get de los usuarios y de un usuario
import { Request, Response } from "express";
import { allUsersRetornerService, returnUserByIDService } from "../services/usersService";
import { User } from "../entities/User";

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const allUsers = await allUsersRetornerService();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(404).json({
      message: "No se pudo obtener todos los usuarios",
      error: error,
    });
  }
};

export const getOneUserController = async (req: Request, res: Response) => {
  try {
    const paramID = req.params.id;
    const userId : User|null = await returnUserByIDService(parseInt(paramID))
    res.status(200).json(userId);
  } catch (error) {
    res.status(404).json({
      message: "No se pudo obtener el detalle del usuario",
      error: error,
    });
  }
};
