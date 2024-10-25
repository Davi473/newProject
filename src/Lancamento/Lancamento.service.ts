import Lancamento from "./Lancamento";
import LancamentoModel from "./Lancamento.model";

export default class LancamentoService 
{
  constructor(private lancamentoModel: LancamentoModel) {}

  public async get(usuario: string): Promise<Lancamento>
  {
    const lancamento = new Lancamento(1, "Davi", "VALE3", "Ação", 10, 50, new Date("24/10/2024"), true);
    return lancamento
  }
}