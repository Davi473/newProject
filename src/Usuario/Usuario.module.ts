import AppHttp from "../config/AppHttp";
import Connection from "../config/dbConnect";
import UsuarioController from "./Usuario.controller";
import UsuarioRepository from "./Usuario.repository";
import UsuarioService from "./Usuario.service";


export default class UsuarioModule
{
  private repository: UsuarioRepository;
  private service: UsuarioService;
  private controller: UsuarioController;

  constructor(private dbConnect: Connection, private appHttp: AppHttp)
  {
    this.repository = new UsuarioRepository(this.dbConnect);
    this.service = new UsuarioService(this.repository);
    this.controller = new UsuarioController(this.appHttp, this.service);
  }
}