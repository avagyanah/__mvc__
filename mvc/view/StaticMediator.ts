import { Mediator } from './Mediator';

export class StaticMediator<T> extends Mediator<T> {
  static NAME: string;

  constructor() {
    super();

    StaticMediator.NAME = this.constructor.name;
  }

  public setViewComponent(viewComponent: any): void {
    this._viewComponent = viewComponent;
  }

  public subscribe(notification: string, callback: any): void {
    return this.view.subscribe(notification, callback);
  }

  public unsubscribe(notification: string): void {
    return this.view.unsubscribe(notification);
  }
}
