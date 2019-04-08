import { Facade } from '../Facade';
import { View } from './View';
import { EventEmitter } from 'events';

export class Mediator<T> {
  public view: View;
  private __viewComponent: T;

  public onRegister(view: View): void {
    this.view = view;
  }

  public onRemove(): void {
    // ...
  }

  public get facade(): Facade {
    return this.view.facade;
  }

  public get viewComponent(): T {
    return this.__viewComponent;
  }

  public set viewComponent(value: T) {
    this.__viewComponent = value;
  }
}
