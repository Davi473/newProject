import AppHttp from "../config/AppHttp";
import Connection from "../config/dbConnect";
import LancamentoController from "./Lancamento.controller";

export default class LancamentoModule
{
  private lancamentoController: LancamentoController;

  constructor(private dbConnect: Connection, private appHttp: AppHttp)
  { 
    this.lancamentoController = new LancamentoController();
  }
}