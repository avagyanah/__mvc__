import { Facade } from '../Facade';
import { View } from './View';

export class Mediator<T> {
  public view: View;
  protected _viewComponent: T;

  public onRegister(view: View): void {
    this.view = view;
  }

  public onRemove(): void {
    // ...
  }

  public get facade(): Facade {
    return this.view.facade;
  }

  public get viewComponent(): any {
    return this._viewComponent;
  }
}
