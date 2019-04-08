import { Mediator } from './Mediator';
import { Map } from '../utils/Map';

export class StaticMediator<T> extends Mediator<T> {
  public __interests: Map<string, Function>;

  constructor() {
    super();

    this.__interests = new Map();
  }

  public onRemove(): void {
    this.viewComponent &&
      //@ts-ignore
      this.viewComponent.removeAllListeners &&
      //@ts-ignore
      this.viewComponent.removeAllListeners();
    super.onRemove();
  }

  public setViewComponent(viewComponent: T): void {
    this.viewComponent = viewComponent;
  }

  public sleep(): void {
    return this.view.sleepMediator(this.constructor.name);
  }

  public wake(): void {
    return this.view.wakeMediator(this.constructor.name);
  }

  public subscribe(notification: string, callback: any): void {
    this.__interests.set(notification, callback);
    return this.view.subscribe(notification, this.constructor.name);
  }

  public unsubscribe(notification: string): void {
    this.__interests.delete(notification);
    return this.view.unsubscribe(notification, this.constructor.name);
  }

  public handleNotification(notification: string, ...args: any[]): void {
    const callback = this.__interests.get(notification);
    callback.call(this, ...args);
  }

  public get interests(): Map<string, Function> {
    return this.__interests;
  }
}
