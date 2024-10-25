import { Request, Response } from "express";
import AppHttp from "../config/AppHttp";

export default class LancamentoController {

  private url: string = "/lancamento";

  // GET /lancamento
  constructor(private appHttp: AppHttp)
  {
    this.appHttp.register("get", this.url, async (req: Request, res: Response) => {
      try {
        res.status(200).json({ status: 200, message: "Lançamento acessado com sucesso!", lancamento });
      } catch (err: any) {
        res.status(501).json({ status: 501, message: `${err.message} -- Erro na solicitação` });
      }
    });

    this.appHttp.register("post", this.url, async (req: Request, res: Response) => {
      try {
        res.status(201).json({ status: 201, message: "Adicionado com sucesso", lancamento });
      } catch (err: any) {
        res.status(501).json({ status: 501, message: `${err.message} -- Erro ou adicionar` }); 
      }
    });
  }
  
}