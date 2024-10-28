import Connection from "../config/dbConnect";
import Usuario from "./Usuario";

interface UsuarioModel
{
  id: number, name: string,
  hash: string, createad: Date
}

export default class UsuarioRepository
{
  private table = "usuarios"

  constructor(private dbConnect: Connection) {}

  public async insert(name: string, hash: string)
  {
    const query = `INSERT INTO ${this.table} (name, hash) VALUES ($1, $2)`;
    await this.dbConnect.query(query, [name, hash]);
  }

  public async select(name: string)
  {
    const query = `SELECT * FROM ${this.table} WHERE name = $1`;
    const user: UsuarioModel = await this.dbConnect.query(query, [name]);
    return this.mapUser(user);
  }

  public async delete(id: number, name: string, hash: string)
  {
    const query = `DELETE FROM ${this.table} WHERE id = $1 AND name = $2`;
    await this.dbConnect.query(query, [id, name, hash]);
  }

  private mapUser(user: UsuarioModel)
  {
    return new Usuario(user.id, user.name, user.hash, user.createad);
  }
}