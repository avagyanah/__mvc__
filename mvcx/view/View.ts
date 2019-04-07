import { Facade } from '../Facade';
import { Map } from '../utils/Map';
import { StaticMediator } from './StaticMediator';
import { DynamicMediator } from './DynamicMediator';

export class View {
  public facade: Facade;
  private __staticMediatorsMap: Map<string, StaticMediator<any>>;
  private __dynamicMediatorsMap: Map<string, DynamicMediator<any>>;
  private __eventsMap: Map<string, string[]>;

  constructor(facade: Facade) {
    this.facade = facade;
    this.__staticMediatorsMap = new Map();
    this.__dynamicMediatorsMap = new Map();
    this.__eventsMap = new Map();
  }

  public registerMediator(
    mediator: new () => StaticMediator<any>,
  ): StaticMediator<any> {
    const mediatorInstance = new mediator();
    //@ts-ignore
    const name = mediatorInstance.constructor.NAME;
    this.__staticMediatorsMap.set(name, mediatorInstance);
    mediatorInstance.onRegister(this);
    return mediatorInstance;
  }

  public removeMediator(key: string): void {
    if (!this.hasMediator(key)) {
      return;
    }

    let mediator = this.__staticMediatorsMap.get(key);
    this.__staticMediatorsMap.delete(key);

    mediator.interests.keys.forEach((notification: string) =>
      this.unsubscribe(notification, key),
    );

    mediator.onRemove();
    mediator = null;
  }

  public sleepMediator(key: string): void {
    if (!this.hasMediator(key)) {
      return;
    }

    let mediator = this.__staticMediatorsMap.get(key);
    mediator.interests.keys.forEach((notification: string) =>
      this.unsubscribe(notification, key),
    );
  }

  public wakeMediator(key: string): void {
    if (!this.hasMediator(key)) {
      return;
    }

    let mediator = this.__staticMediatorsMap.get(key);
    mediator.interests.keys.forEach((notification: string) =>
      this.subscribe(notification, key),
    );
  }

  public retrieveMediator(key: string): StaticMediator<any> {
    return this.__staticMediatorsMap.get(key);
  }

  public hasMediator(key: string): boolean {
    return this.__staticMediatorsMap.has(key);
  }

  public handleNotification(notification: string, ...args: any[]): void {
    if (this.hasEvent(notification)) {
      const names = this.__eventsMap.get(notification);
      names.forEach((name: string) => {
        const mediator = this.__staticMediatorsMap.get(name);
        mediator.handleNotification(notification, ...args);
      });
    }
  }

  public subscribe(notification: string, mediatorName: string): void {
    if (!this.hasEvent(notification)) {
      this.__eventsMap.set(notification, [mediatorName]);
    } else {
      const names = this.__eventsMap.get(notification);
      const existing = names.indexOf(mediatorName);
      if (existing !== -1) {
        names[existing] = mediatorName;
      } else {
        names.push(mediatorName);
      }
    }
  }

  public unsubscribe(notification: string, mediatorName: string): void {
    if (!this.hasEvent(notification)) {
      return;
    }

    const names = this.__eventsMap.get(notification);
    const existing = names.indexOf(mediatorName);
    if (existing !== -1) {
      names.splice(existing, 1);
      if (!names.length) {
        this.__eventsMap.delete(notification);
      }
    }
  }

  private hasEvent(key: string): boolean {
    return this.__eventsMap.has(key);
  }
}
