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
    const query = `
      SELECT 
        l.is AS id, a.ticket AS ticket, a.tipo AS tipo,
        l.quantidade, l.preco, l.data,
        CASE 
          WHEN l.compra = true THEN 'compra' ELSE 'venda'
        END AS operacao  
      FROM 
        lancamento l 
      JOIN 
        usuarios u ON l.id_usuario = u.id
      JOIN 
        ativo a ON l.id_ativo = a.id
      WHERE 
        l.usuario = $1`
    const lancamentos: LancamentoModel[] = await this.dbConnect.query(query, [usuario]);
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