import { Controller, ICommand } from './controller/Controller';
import { View } from './view/View';
import { Model } from './model/Model';
import { StaticMediator } from './view/StaticMediator';

export class Facade {
  private static _instance: Facade;
  private __controller: Controller;
  private __model: Model;
  private __view: View;

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }

  public sendNotification(notificationName: string, ...args: any[]) {
    this.__controller.executeCommand(notificationName, ...args);
  }

  public registerCommand(key: string, command: ICommand): void {
    return this.__controller.registerCommand(key, command);
  }

  public registerStaticMediator(key: string, mediator: StaticMediator): void {
    return this.__view.registerStaticMediator(key, mediator);
  }

  public initialize() {
    this.initializeModel();
    this.initializeController();
    this.initializeView();
  }

  protected initializeModel() {
    this.__model = new Model(this);
  }

  protected initializeController() {
    this.__controller = new Controller(this);
  }

  protected initializeView() {
    this.__view = new View(this);
  }
}
