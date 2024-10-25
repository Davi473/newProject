
export default class Lancamento 
{ 
  private id: number;
  private usuario: string;
  private ticket: string;
  private tipo: string;
  private quantidade: number;
  private preco: number;
  private data: Date;
  private compra: boolean;

  constructor(
    id: number, usuario: string, ticket: string,
    tipo: string, quantidade: number, preco: number, 
    data: Date, compra: boolean

  ) {
    this.id = id;
    this.usuario = usuario;
    this.ticket = ticket;
    this.tipo = tipo;
    this.quantidade = quantidade;
    this.preco = preco;
    this.data = data;
    this.compra = compra;

  }

  public getId() {
    return this.id;
  }

  public getUsuario() {
    return this.usuario;
  }

  public getTicket() {
    return this.ticket;
  }

  public getTipo() {
    return this.tipo;
  }

  public getQuantidade() {
    return this.quantidade;
  }

  public getPreco() {
    return this.preco;
  }

  public getData() {
    return this.data;
  }

  public getCompra() {
    return this.compra;
  }

  public getPrecoTotal() {
    return this.preco * this.quantidade;
  }
}
