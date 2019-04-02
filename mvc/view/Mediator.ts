import { Facade } from '../Facade';

export class Mediator {
  protected _facade: Facade;

  public onRegister(facade: Facade) {
    this._facade = facade;
  }
}
