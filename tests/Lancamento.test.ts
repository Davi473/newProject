import PostgresConnection from "../src/config/postgres";
import Lancamento from "../src/Lancamento/Lancamento";
import LancamentoRepository from "../src/Lancamento/Lancamento.repository";
import LancamentoService from "../src/Lancamento/Lancamento.service";
import "dotenv/config";

test("Test LancamentoService", async function() {
  const dadosDb: string = process.env.ADDRESS_DB || "erro";
  const connect = new PostgresConnection(dadosDb);
  const lancamentoRepository = new LancamentoRepository(connect);
  const lancamentoService = new LancamentoService(lancamentoRepository);
  // Get
  const usuario = 1
  const get = lancamentoService.get(usuario);
  console.log("get")
  
  // se for class "toBeInstanceOf" se for interface "toHaveProperty"
  expect(get).toBeInstanceOf(Promise<Lancamento>);
});
