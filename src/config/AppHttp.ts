import express, {Express, Request, Response} from "express";
import Cors

type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';

export default class AppHttp
{
  private app: Express = express();

  constructor()
  {
    this.app.use(express.json());
  }

  register(method: HttpMethod, url: string, callback: Function)
  {
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
