import Connection from "./dbConnect";
import pgPromise, { IDatabase, IMain } from "pg-promise";

export default class PostgresConnection extends Connection {
  private pgConnection: IDatabase<{}>;
  private pgp: IMain = pgPromise();

  constructor(config: string) {
    super(config);
    this.pgConnection = this.pgp(config);
  }

  async connect(): Promise<void> {
    // Em pg-promise, a conexão já é aberta na inicialização, então não precisa de código aqui
  }

  async query(statement: string, params?: any[]): Promise<{}> {
    return this.pgConnection.query(statement, params);
  }

  async close(): Promise<void> {
    this.pgp.end();
  }
}