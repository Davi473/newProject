
export default class Usuario 
{
  constructor(
    private id: number, private name: string, 
    private hash: string, private createad: Date
  ) {}

  public getId()
  {
    return this.id;
  }

  public getName()
  {
    return this.name;
  }

  public getHash()
  {
    return this.hash
  }

  public getCreatead()
  {
    return this.createad;
  }
}