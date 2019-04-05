import { Facade } from '../Facade';
import { SimpleMap } from '../utils/SimpleMap';
import { StaticMediator } from './StaticMediator';
import { DynamicMediator } from './DynamicMediator';
import { EventEmitter } from 'events';

export class View {
  public facade: Facade;
  private __staticMediatorsMap: SimpleMap<string, StaticMediator<any>>;
  private __dynamicMediatorsMap: SimpleMap<string, DynamicMediator<any>>;
  private __eventsMap: SimpleMap<string, any>;

  constructor(facade: Facade) {
    this.facade = facade;
    this.__staticMediatorsMap = new SimpleMap();
    this.__dynamicMediatorsMap = new SimpleMap();
    this.__eventsMap = new SimpleMap();
  }

  public registerStaticMediator(mediator: new () => StaticMediator<any>): void {
    const mediatorInstance = new mediator();
    this.__staticMediatorsMap.set(
      //@ts-ignore
      mediatorInstance.constructor.NAME,
      mediatorInstance,
    );
    mediatorInstance.onRegister(this);
  }

  public removeStaticMediator(key: string): void {
    this.__staticMediatorsMap.delete(key);
  }

  public handleNotification(notification: string, ...args: any[]): void {
    const callback = this.__eventsMap.get(notification);
    callback && callback(...args);
  }

  public subscribe(notification: string, callback: any): void {
    this.__eventsMap.set(notification, callback);
  }

  public unsubscribe(notification: string): void {
    this.__eventsMap.delete(notification);
  }
}
