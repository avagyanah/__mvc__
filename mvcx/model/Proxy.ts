import { Model } from './Model';
import { Facade } from '../Facade';

export class Proxy<T> {
  public model: Model;
  private __vo: T;

  public onRegister(model: Model): void {
    this.model = model;
  }

  public onRemove(): void {
    // ...
  }

  public getData(): T {
    return this.__vo;
  }

  public get facade(): Facade {
    return this.model.facade;
  }

  public get vo(): T {
    return this.__vo;
  }

  public set vo(value: T) {
    this.__vo = value;
  }
}
