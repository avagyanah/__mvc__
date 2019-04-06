import { Facade } from '../Facade';
import { View } from './View';

export class Mediator<T> {
  public view: View;
  protected _viewComponent: T;

  public onRegister(view: View) {
    this.view = view;
  }

  public get facade(): Facade {
    return this.view.facade;
  }

  public get getViewComponent(): any {
    return this._viewComponent;
  }
}
