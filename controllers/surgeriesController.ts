import { createConnection } from "typeorm";
import { Surgery } from "../entity/Surgery";

const surgeriesController = {
  async getSurgery(req, res, next) {
    let { body } = req;
    const connection = await createConnection();
    const surgery = new Surgery(
      body.nome,
      body.data_de_cirurgia,
      body.tipo_de_cirurgia,
      body.convenio,
      body.valor,
      body.recebido_por,
      body.pago
    );
    await connection.manager.save(surgery);
    res.json(surgery);
  },
};
