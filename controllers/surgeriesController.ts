import { getRepository } from "typeorm";
import { Surgery } from "../entity/Surgery";
import { Request, Response, NextFunction } from "express";
import {} from "../app";
export const surgeriesController = {
  async getSurgeries(req: Request, res: Response, next: NextFunction) {
    const surgeries = await getRepository(Surgery).find();
    res.json(surgeries);
  },
  async getSurgery(req: Request, res: Response, next: NextFunction) {
    const { params } = req;
    const surgery = await getRepository(Surgery).findOne(params.id);
    res.json(surgery);
  },
  async createSurgeries(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const surgeries = await getRepository(Surgery).save(body);
    res.json(surgeries);
  },
  async deleteSurgeries(req: Request, res: Response, next: NextFunction) {
    const { params } = req;
    const surgeries = await getRepository(Surgery).delete(params.id);
    res.json(surgeries);
  },
  async updateSurgeries(req: Request, res: Response, next: NextFunction) {
    const { params, body } = req;
    const surgeries = await getRepository(Surgery).update(params.id, body);
    res.json(surgeries);
  },
};
