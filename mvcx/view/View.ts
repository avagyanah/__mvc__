import { Facade } from '../Facade';
import { SimpleMap } from '../utils/SimpleMap';
import { StaticMediator } from './StaticMediator';
import { DynamicMediator } from './DynamicMediator';
import { remove } from '../utils/ArrayRemove';

export class View {
  public facade: Facade;
  private __staticMediatorsMap: SimpleMap<string, StaticMediator<any>>;
  private __dynamicMediatorsMap: SimpleMap<string, DynamicMediator<any>>;
  private __eventsMap: SimpleMap<string, object[]>;

  constructor(facade: Facade) {
    this.facade = facade;
    this.__staticMediatorsMap = new SimpleMap();
    this.__dynamicMediatorsMap = new SimpleMap();
    this.__eventsMap = new SimpleMap();
  }

  public registerStaticMediator(mediator: new () => StaticMediator<any>): void {
    const mediatorInstance = new mediator();
    //@ts-ignore
    const name = mediatorInstance.constructor.NAME;
    this.__staticMediatorsMap.set(name, mediatorInstance);
    mediatorInstance.onRegister(this);
  }

  public removeStaticMediator(key: string): void {
    this.__staticMediatorsMap.delete(key);

    // this.__eventsMap.delete(key);
  }

  public handleNotification(notification: string, ...args: any[]): void {
    let events = this.__eventsMap.get(notification);
    if (!events) {
      return;
    }
    //@ts-ignore
    events.forEach(e => e.value(...args));
  }

  public subscribe(
    mediatorName: string,
    notification: string,
    callback: any,
  ): void {
    const events = this.__eventsMap.get(notification);
    const event = { key: mediatorName, value: callback };
    events ? events.push(event) : this.__eventsMap.set(notification, [event]);
  }

  public unsubscribe(mediatorName: string, notification: string): void {
    let events = this.__eventsMap.get(notification);
    //@ts-ignore
    const event = events.find(e => e.key === mediatorName);
    this.__eventsMap.set(notification, remove(events, events.indexOf(event)));
  }
}
