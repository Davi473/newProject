import Lancamento from "../Lancamento/Lancamento";

export default class CalcularMedia
{
  private quantidade: number = 0;
  private precoMedia: number = 0;
  private precoTotal: number = 0;
  private ticket: string;
  private usuario: string;

  constructor(private lancamentos: Lancamento[]) {
    this.ticket = this.lancamentos[0].getTicket();
    this.usuario = this.lancamentos[0].getUsuario();
  }

  public calculaMedia()
  {
    this.lancamentos.forEach((lancamento) => {

      const compra = lancamento.getCompra()
      this.quantidade = this.calcular(this.quantidade, lancamento.getQuantidade(), compra);
      this.precoTotal = this.calcular(this.precoTotal, lancamento.getPrecoTotal(), compra);
      
      if(this.quantidade <= 0)
      {
        this.quantidade = 0;
        this.precoTotal = 0;
      }
    });
    
    if(this.quantidade == 0)
    {
      this.precoMedia = 0;
      return this.getObjectMedia();
    }
    this.precoMedia = Number((this.precoTotal / this.quantidade).toFixed(2));

    return this.getObjectMedia();
  }

  private getObjectMedia()
  {
    return ({usuario: this.usuario, ticket: this.ticket, media: this.precoMedia, quantidade: this.quantidade});
  }

  private calcular(valueOne: number, valueTwo: number, compra: boolean)
  {
    switch(compra) 
    {
      case true:
        return valueOne + valueTwo;
      
      case false:
        return valueOne - valueTwo;
    }   
  }
}
