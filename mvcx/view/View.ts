import { Facade } from '../Facade';
import { SimpleMap } from '../utils/SimpleMap';
import { StaticMediator } from './StaticMediator';
import { DynamicMediator } from './DynamicMediator';

export class View {
  public facade: Facade;
  private __staticMediatorsMap: SimpleMap<string, StaticMediator<any>>;
  private __dynamicMediatorsMap: SimpleMap<string, DynamicMediator<any>>;
  private __eventsMap: SimpleMap<string, string[]>;

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
    this.__eventsMap.values.forEach((value: string[]) => {
      value.splice(value.indexOf(key), 1);
    });
  }

  public handleNotification(notification: string, ...args: any[]): void {
    const events = this.__eventsMap.get(notification);

    if (!events) {
      return;
    }

    events.forEach(e => {
      const mediator = this.__staticMediatorsMap.get(e);
      mediator.handleNotification(notification, ...args);
    });
  }

  public subscribe(notification: string, mediatorName: string): void {
    const events = this.__eventsMap.get(notification);
    if (events) {
      const existing = events.indexOf(mediatorName);
      existing !== -1
        ? (events[existing] = mediatorName)
        : events.push(mediatorName);
    } else {
      this.__eventsMap.set(notification, [mediatorName]);
    }
  }

  public unsubscribe(notification: string, mediatorName: string): void {
    let events = this.__eventsMap.get(notification);
    const existing = events.indexOf(mediatorName);
    if (existing !== -1) {
      events.splice(existing, 1);
    }
  }
}
