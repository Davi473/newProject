import PostgresConnection from "../src/config/postgres";
import Lancamento from "../src/Lancamento/Lancamento";
import LancamentoModel from "../src/Lancamento/Lancamento.model";
import LancamentoService from "../src/Lancamento/Lancamento.service";
import "dotenv/config";

test("Test LancamentoService", async function() {
  const dadosDb: string = process.env.ADDRESS_DB || "erro";
  const connect = new PostgresConnection(dadosDb);
  const lancamentoMode = new LancamentoModel(connect);
  const lancamentoService = new LancamentoService(lancamentoMode);
  // Get
  const usuario = "Davi"
  const get = lancamentoService.get("Davi");
  // se for class "toBeInstanceOf" se for interface "toHaveProperty"
  expect(get).toBeInstanceOf(Promise<Lancamento>);
  //expect().toBe(15);
});
