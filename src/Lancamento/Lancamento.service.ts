import Lancamento from "./Lancamento";
import LancamentoRepository from "./Lancamento.repository";

export default class LancamentoService 
{
  constructor(private repository: LancamentoRepository) {}

  public async get(usuario: number): Promise<Lancamento[]>
  {
    const lancamento = await this.repository.select(usuario);
    return lancamento;
  }
}