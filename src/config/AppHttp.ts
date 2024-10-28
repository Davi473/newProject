import express, {Express, NextFunction, Request, Response} from "express";
import cors from "cors";
import Token from "./Token";

type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

export default class AppHttp
{
  private app: Express = express();

  constructor()
  {
    this.app.use(express.json());
    this.app.use(cors());
  }

  register(method: HttpMethod, url: string, callback: Function, middleware?: Token)
  {
    if(middleware)
    {
      this.app[method](url, async (req: Request, res: Response) =>
        {
          return await callback(middleware, req, res);
        });
    };
    
    this.app[method](url, async (req: Request, res: Response) =>
    {
      return await callback(req, res);
    });
  }

  listen(porta: number)
  {
    this.app.listen(porta, () => {
      console.log(`Servidor aberto na porta ${porta}`)
    });
  }
}
