import LancamentoModule from "./Lancamento/Lancamento.module";
import PostgresConnection from "./config/postgres";
import AppHttp from "./config/AppHttp";
import "dotenv/config";
import UsuarioModule from "./Usuario/Usuario.module";

const porta = Number(process.env.PORTA_SERVER) || 3000;
const appHttp = new AppHttp();

const configDB = process.env.ADDRESS_DB || "erro";
const postgres = new PostgresConnection(configDB);

//const lancamento = new LancamentoModule(postgres, appHttp);
const usuario = new UsuarioModule(postgres, appHttp);

appHttp.listen(porta);