import { getRepository } from "typeorm";
import { Surgery } from "../entity/Surgery";
import { Request, Response, NextFunction } from 'express';
import {  } from '../app'
export const surgeriesController = {
  async getSurgeries(req: Request, res: Response, next: NextFunction) {
  
    const surgeries = await getRepository(Surgery).find();
    res.json(surgeries);
  },
};
