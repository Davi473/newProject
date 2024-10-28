import Hash from "../config/Hash";
import Token from "../config/Token";
import UsuarioRepository from "./Usuario.repository";

export default class UsuarioService
{
  constructor(private repository: UsuarioRepository) {}

  // False se usuario ja existe e True se usuario foi criado
  public async post(name: string, senha: string)
  {
    const user = await this.repository.select(name);
    if(user.getName())
    {
      const hash = Hash.createHash(senha);
      await this.repository.insert(name, hash);
      return true;
    }
    return false;
  }

  // True usuario deletado False se senha esta incorreta
  public async delete(name: string, senha: string): Promise<boolean>
  {
    const user = await this.repository.select(name);
    const hash = Hash.authentic(senha, user.getHash());
    if(hash)
    {
      await this.repository.delete(user.getId(), name, user.getHash());
      return true;
    }
    return false;
  }

  // False se usuario n existe e senha incorreta Token se esta tudo certo
  public async put(name: string, senha: string): Promise<string | boolean>
  {
    const user = await this.repository.select(name);
    if(!user.getName())
    {
      return false;
    }

    const hash = Hash.authentic(name, user.getHash());
    if(hash)
    {
      return Token.createToken(user.getId(), user.getName());
    }
    return false;   
  }
}