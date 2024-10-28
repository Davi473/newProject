import Connection from "../config/dbConnect";
import Lancamento from "./Lancamento";

interface LancamentoModel {
  id: number;
  usuario: string;
  ticket: string;
  tipo: string;
  quantidade: number;
  preco: number;
  data: Date;
  compra: boolean;
}

export default class LancamentoRepository
{
  constructor(private dbConnect: Connection) {}

  public async select(usuario: number)
  {
    const lancamentos: LancamentoModel[] = await this.dbConnect.query(
      "SELECT * FROM ativos.lancamento WHERE usuario = $1",
      [usuario]
    );
    return this.mapLancamento(lancamentos);
  }
  /*
  public selectAtivo(usuario: string, ativo: string)
  {
    const lancamentos = this.dbConnect.query(
      ""
    )
  }
  */
  private mapLancamento(lancamentos: LancamentoModel[])
  {  
    const lancamento: Lancamento[] = [];
    if(lancamentos.length > 0)
    {
      lancamento.push(...lancamentos.map(lancamento => {
          return new Lancamento(
            lancamento.id, lancamento.usuario, lancamento.ticket,
            lancamento.tipo, lancamento.quantidade, lancamento.preco,
            lancamento.data, lancamento.compra
          )
      }));
    }
    return lancamento;
  }
}