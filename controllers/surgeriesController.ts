import { createConnection } from "typeorm";
import { Surgery } from "../entity/Surgery";
import { Request, Response, NextFunction } from 'express';

export const surgeriesController = {
  async getSurgeries(req: Request, res: Response, next: NextFunction) {
    const connection = await createConnection();
    const surgeries = await connection.manager.find(Surgery);
    res.json(surgeries);
  },
};
