import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

export default class HashUser
{
  public static createHash(senha: string)
  {
    const sal = randomBytes(16).toString("hex");
    const senhaHash = scryptSync(senha, sal, 64).toString("hex");
    return `${sal}:${senhaHash}`
  }

  public static authentic(senha: string, hashSenha: string)
  {
    const [sal, hash] = hashSenha.split(":")
    const testeHash = scryptSync(senha, sal, 64);
    const hashReal = Buffer.from(hash, "hex");
    return timingSafeEqual(testeHash, hashReal);
  }
}