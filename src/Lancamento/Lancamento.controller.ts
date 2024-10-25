import { Request, Response } from "express";

export default class LancamentoController {
  
  public async get(req: Request, res: Response): Promise<void> {
    res.send({ message: "Lançamento acessado com sucesso!" });
  }
}