import { Facade } from '../Facade';
import { Map } from '../utils/Map';

export class Controller {
  private __commandsMap: Map<string, ICommand>;
  private __facade: Facade;

  constructor(facade: Facade) {
    this.__facade = facade;
    this.__commandsMap = new Map();
  }

  public registerCommand(key: string, command: ICommand): void {
    this.__commandsMap.set(key, command);
  }

  public removeCommand(key: string): void {
    this.__commandsMap.delete(key);
  }

  public executeCommand(key: string, ...args: any[]): void {
    if (!this.__commandsMap.has(key)) {
      return;
    }
    this.__commandsMap.get(key)(this.__facade, key, ...args);
  }
}

export interface ICommand {
  (facade: Facade, notification: string, ...args: any[]): void;
}
