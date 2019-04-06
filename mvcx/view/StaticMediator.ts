import { Mediator } from './Mediator';
import { Map } from '../utils/Map';

export class StaticMediator<T> extends Mediator<T> {
  public interests: Map<string, Function>;

  constructor() {
    super();

    this.interests = new Map();
  }

  public onRemove(): void {
    this._viewComponent &&
      //@ts-ignore
      this._viewComponent.removeAllListeners &&
      //@ts-ignore
      this._viewComponent.removeAllListeners();
    super.onRemove();
  }

  public setViewComponent(viewComponent: T): void {
    this._viewComponent = viewComponent;
  }

  public subscribe(notification: string, callback: any): void {
    this.interests.set(notification, callback);
    //@ts-ignore
    return this.view.subscribe(notification, this.constructor.NAME);
  }

  public unsubscribe(notification: string): void {
    this.interests.delete(notification);
    //@ts-ignore
    return this.view.unsubscribe(notification, this.constructor.NAME);
  }

  public handleNotification(notification: string, ...args: any[]): void {
    const callback = this.interests.get(notification);
    callback.call(this, ...args);
  }
}
