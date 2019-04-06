import { Mediator } from './Mediator';
import { SimpleMap } from '../utils/SimpleMap';

export class StaticMediator<T> extends Mediator<T> {
  public interests: SimpleMap<string, Function>;

  constructor() {
    super();

    this.interests = new SimpleMap();
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
