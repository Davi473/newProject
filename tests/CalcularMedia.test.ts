import Lancamento from "../src/Lancamento/Lancamento";
import CalcularMedia from "../src/config/CalcularMedia";

test("Test CalcularMedia", async function() {
  const lancamentoJSON = {id: 1, usuario: "Davi", ticket: "VALE3", tipo: "Ação", quantidade: 10, preco: 50, data: new Date("24/10/2024"), compra: true};
  const lancamentoJSONTwo = {id: 2, usuario: "Davi", ticket: "VALE3", tipo: "Ação", quantidade: 10, preco: 60, data: new Date("24/10/2024"), compra: true};
  const lancamentoJSONThree = {id: 3, usuario: "Davi", ticket: "VALE3", tipo: "Ação", quantidade: 5, preco: 60, data: new Date("24/10/2024"), compra: false};
  const lancamentosArray = [lancamentoJSON, lancamentoJSONTwo, lancamentoJSONThree];

  const lancamentos: Lancamento[] = [];
  lancamentosArray.map(lancamentoArray => { 
    lancamentos.push(
      new Lancamento(
        lancamentoArray.id, lancamentoArray.usuario, lancamentoArray.ticket,
        lancamentoArray.tipo, lancamentoArray.quantidade, lancamentoArray.preco,
        lancamentoArray.data, lancamentoArray.compra
      )
    )});

  const calculaMedia = new CalcularMedia(lancamentos);
  const media = calculaMedia.calculaMedia();
  expect(media.media).toBe(53.33);
  expect(media.quantidade).toBe(15);
});
