import AppHttp from "../config/AppHttp";
import Connection from "../config/dbConnect";
import LancamentoController from "./Lancamento.controller";
import LancamentoRepository from "./Lancamento.repository";
import LancamentoService from "./Lancamento.service";

export default class LancamentoModule
{
  private controller: LancamentoController;
  //private repository: LancamentoRepository;
  //private service: LancamentoService;

  constructor(private dbConnect: Connection, private appHttp: AppHttp)
  { 
    //this.repository = new LancamentoRepository(this.dbConnect);
    //this.service = new LancamentoService(this.repository);
    this.controller = new LancamentoController(this.appHttp, /*this.repository*/);
  }
}