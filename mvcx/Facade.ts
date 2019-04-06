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

  public sendNotification(notification: string, ...args: any[]) {
    this.__controller.executeCommand(notification, ...args);
    this.__view.handleNotification(notification, ...args);
  }

  public registerCommand(key: string, command: ICommand): void {
    return this.__controller.registerCommand(key, command);
  }

  public removeCommand(key: string): void {
    return this.__controller.removeCommand(key);
  }

  public registerMediator(mediator: new () => StaticMediator<any>): void {
    return this.__view.registerMediator(mediator);
  }

  public removeMediator(key: string): void {
    return this.__view.removeMediator(key);
  }

  public retrieveMediator(key: string): StaticMediator<any> {
    return this.__view.retrieveMediator(key);
  }

  public hasMediator(key: string): boolean {
    return this.__view.hasMediator(key);
  }

  public initialize() {
    this.initializeController();
    this.initializeModel();
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
