import { SimpleMap } from './utils/SimpleMap';
import { Controller } from './controller/Controller';
import { StaticMediator } from './view/StaticMediator';
import { DynamicMediator } from './view/DynamicMediator';
import { View } from './view/View';

export declare class Facade {
  constructor();
  public initialize(): void;
  static getInstance(): Facade;
  public sendNotification(notificationName: string, body?: object): void;
  protected initializeController(): void;
  protected initializeModel(): void;
  protected initializeView(): void;
  public controller: Controller;
  public view: View;
}
