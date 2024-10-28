import { Request, Response } from "express";
import AppHttp from "../config/AppHttp";
import LancamentoService from "./Lancamento.service";
import Token from "../config/Token";

export default class LancamentoController {

  private url: string = "/lancamento";

  // GET /lancamento
  constructor(private appHttp: AppHttp/*, private service: LancamentoService*/)
  {
    this.appHttp.register("get", this.url + "/:id", async (req: Request, res: Response) =>
    {
      try {
        /*
        const id: number = Number(req.params.id);
        const lancamentos = this.service.get(id);
        res.status(200).json({ status: 200, message: "Lançamento acessado com sucesso!", lancamentos });
        */
        res.send("oieee");
      } catch (err: any) {
        res.status(501).json({ status: 501, message: `${err.message} -- Erro na solicitação` });
      }
    }, Token.authToke);

    /*
    this.appHttp.register("post", this.url, async (req: Request, res: Response) =>
    {
      try {
        res.status(201).json({ status: 201, message: "Adicionado com sucesso", lancamento });
      } catch (err: any) {
        res.status(501).json({ status: 501, message: `${err.message} -- Erro ou adicionar` }); 
      }
    });
    */
  }
  
}