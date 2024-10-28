import AppHttp from "../config/AppHttp";
import { Request, Response } from "express";
import UsuarioService from "./Usuario.service";
import Token from "../config/Token";

export default class UsuarioController
{
  private url = "/api";

  constructor(private appHttp: AppHttp, private service: UsuarioService)
  {
    this.appHttp.register("post", this.url + "/register", async (req: Request, res: Response) =>
    {
      try {
        const { name, senha } = req.body;
        const user = await this.service.post(name, senha);
        if(user)
        {
          res.status(201).json({ message: "Adicionado com sucesso" });
          return
        }
        res.status(301).json({ message: "Usuario ja existe" });
      } catch (err: any) {
        res.status(501).json({ message: `${err.message} -- Erro ao criar novo usuario` });
      }
    });

    this.appHttp.register("put", this.url + "/login", async (req: Request, res: Response) =>
    {
      try {
        const { name, senha } = req.body;
        const token = await this.service.put(name, senha);
        if(token)
        {
          res.status(201).json({ message: "Authorized", token});
          return;
        }
        res.status(301).json({ message: "Algo esta incorreto"});
      } catch (err: any) {
        res.status(501).json({ message: `${err.message} -- Erro ao fazer login` });
      }
    });

    this.appHttp.register("delete", this.url + "/delete", async (req: any, res: Response) =>
    {
      try {
        const { name, senha } = req.body;
        const { id } = req.user;
        res.status(201).json({ message: "Excluir com sucesso", name, senha, id });
      } catch (err: any) {
        res.status(501).json({ message: `${err.message} -- Erro ao deletar usuario` });
      }
    }, Token.authToke);
  }
}