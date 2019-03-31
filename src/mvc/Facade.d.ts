import { StaticMediator } from './StaticMediator';
import { DynamicMediator } from './DynamicMediator';
import { SimpleMap } from './utils/SimpleMap';
import { Controller } from './Controller';

export declare class Facade {
  public initialize(): void;
  public static getInstance(): Facade;
  public sendNotification(notificationName: string, body?: object): void;
  public registerCommand(
    notificationName: string,
    command: (
      facade: Facade,
      notificationName: string,
      body?: object,
    ) => Promise<void> | void,
  ): void;
  public registerStaticMediator(mediatorClass: new () => StaticMediator): any;
  public registerDynamicMediator(mediatorClass: new () => DynamicMediator): any;
  protected commandsMap: SimpleMap;
  protected staticMediatorsMap: SimpleMap;
  protected initializeController(): void;
  protected initializeModel(): void;
  protected initializeView(): void;
  private controller: Controller;
}
