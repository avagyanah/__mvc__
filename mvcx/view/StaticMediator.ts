import { Mediator } from './Mediator';

export class StaticMediator<T> extends Mediator<T> {
  public setViewComponent(viewComponent: T): void {
    this._viewComponent = viewComponent;
  }

  public subscribe(notification: string, callback: any): void {
    //@ts-ignore
    return this.view.subscribe(this.constructor.NAME, notification, callback);
  }

  public unsubscribe(notification: string): void {
    //@ts-ignore
    return this.view.unsubscribe(this.constructor.NAME, notification);
  }
}
