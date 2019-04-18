import { Facade } from '../Facade';
import { MVCMap, logMediator, logNone } from '../utils';

export class Mediator<T> {
  private static readonly _consoleArgs: string[] = [
    '',
    `background: ${'#2A3351'}`,
    `background: ${'#364D98'}`,
    `color: ${'#F4F6FE'}; background: ${'#3656C1'};`,
    `background: ${'#364D98'}`,
    `background: ${'#2A3351'}`,
  ];

  private __facade: Facade;
  private __viewComponent: T;
  private __interests: MVCMap<any>;
  private __logger: (
    consoleArgs: string[],
    name: string,
    action: string,
  ) => void;

  constructor() {
    this.__interests = new MVCMap();
  }

  public onRegister(
    facade: Facade,
    onMediatorNotificationSubscriptionChange: (
      notification: string,
      mediatorName: string,
      subscribe: boolean,
    ) => void,
  ): void {
    this.__facade = facade;
    this.__logger = this.__facade.debug ? logMediator : logNone;
    this._notificationSubscriptionChange = onMediatorNotificationSubscriptionChange;
    this.__logger(Mediator._consoleArgs, this.mediatorName, 'register');
    this.onWake();
  }

  public onRemove(): void {
    this.onSleep();
    this._notificationSubscriptionChange = null;
    this.__logger(Mediator._consoleArgs, this.mediatorName, 'remove');
  }

  public onSleep(): void {
    this.__interests.forEach((notification: string) =>
      this._unsubscribe(notification),
    );
    this.__logger(Mediator._consoleArgs, this.mediatorName, 'sleep');
  }

  public onWake(): void {
    this.__interests.forEach((notification: string, callback: any) =>
      this._subscribe(notification, callback),
    );
    this.__logger(Mediator._consoleArgs, this.mediatorName, 'wake');
  }

  protected _subscribe(notification: string, callback: any): void {
    this.__interests.set(notification, callback);
    this._notificationSubscriptionChange(notification, this.mediatorName, true);
  }

  protected _unsubscribe(notification: string): void {
    this.__interests.delete(notification);
    this._notificationSubscriptionChange(
      notification,
      this.mediatorName,
      false,
    );
  }

  protected get mediatorName(): string {
    return this.constructor.name;
  }

  public handleNotification(notification: string, ...args: any[]): void {
    const callback = this.__interests.get(notification);
    callback.call(this, ...args);
  }

  protected _notificationSubscriptionChange: (
    notification: string,
    mediatorName: string,
    subscribe: boolean,
  ) => void;

  public get viewComponent(): T {
    return this.__viewComponent;
  }

  protected setViewComponent(value: T) {
    this.__viewComponent = value;
  }

  protected get facade(): Facade {
    return this.__facade;
  }
}
