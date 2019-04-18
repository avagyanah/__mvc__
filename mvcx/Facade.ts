import { Controller, ICommand } from './controller/Controller';
import { View } from './view/View';
import { Model } from './model/Model';
import { Mediator } from './view/Mediator';
import { Proxy } from './model/Proxy';

export class Facade {
  private static __instance: Facade;
  private __controller: Controller;
  private __model: Model;
  private __view: View;
  private __debug: boolean;

  public static get Instance() {
    return this.__instance || (this.__instance = new this());
  }

  public sendNotification(notification: string, ...args: any[]) {
    this.__controller.executeCommand(notification, ...args);
    this.__view.handleNotification(notification, ...args);
  }

  public registerDynamicMediator(
    view: new () => any,
    mediator: new () => any,
  ): void {
    return this.__view.registerDynamicMediator(view, mediator);
  }
  public registerMediator(mediator: new () => Mediator<any>): Mediator<any> {
    return this.__view.registerMediator(mediator);
  }
  public removeMediator(mediator: new () => Mediator<any>): void {
    return this.__view.removeMediator(mediator);
  }
  public sleepMediator(mediator: new () => Mediator<any>): void {
    return this.__view.sleepMediator(mediator);
  }
  public wakeMediator(mediator: new () => Mediator<any>): void {
    return this.__view.wakeMediator(mediator);
  }
  public retrieveMediator(mediator: new () => Mediator<any>): Mediator<any> {
    return this.__view.retrieveMediator(mediator);
  }
  public hasMediator(mediator: new () => Mediator<any>): boolean {
    return this.__view.hasMediator(mediator);
  }
  //
  public registerProxy(proxy: new () => Proxy<any>): Proxy<any> {
    return this.__model.registerProxy(proxy);
  }
  public removeProxy(proxy: new () => Proxy<any>): void {
    return this.__model.removeProxy(proxy);
  }
  public retrieveProxy(proxy: new () => Proxy<any>): Proxy<any> {
    return this.__model.retrieveProxy(proxy);
  }
  public hasProxy(proxy: new () => Proxy<any>): boolean {
    return this.__model.hasProxy(proxy);
  }
  //
  public registerCommand(key: string, command: ICommand): void {
    return this.__controller.registerCommand(key, command);
  }
  public removeCommand(key: string): void {
    return this.__controller.removeCommand(key);
  }
  //
  public initialize(debug: boolean) {
    this.__debug = debug;
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

  public get debug(): boolean {
    return this.__debug;
  }
}
