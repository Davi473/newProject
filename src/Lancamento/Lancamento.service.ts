import Lancamento from "./Lancamento";
import LancamentoRepository from "./Lancamento.repository";

export default class LancamentoService 
{
  constructor(private lancamentoRepository: LancamentoRepository) {}

  public async get(usuario: number): Promise<Lancamento[]>
  {
    const lancamento = await this.lancamentoRepository.select(usuario);
    return lancamento;
  }
}