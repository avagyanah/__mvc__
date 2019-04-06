import { Facade } from '../Facade';
import { SimpleMap } from '../utils/SimpleMap';

export class Controller {
  private __commandsMap: SimpleMap<string, ICommand>;
  private __facade: Facade;

  constructor(facade: Facade) {
    this.__facade = facade;
    this.__commandsMap = new SimpleMap();
  }

  public registerCommand(key: string, command: ICommand): void {
    this.__commandsMap.set(key, command);
  }

  public removeCommand(key: string): void {
    this.__commandsMap.delete(key);
  }

  public executeCommand(key: string, ...args: any[]): void {
    const command: ICommand = this.__commandsMap.get(key);
    command && command(this.__facade, key, ...args);
  }
}

export interface ICommand {
  (facade: Facade, notification: string, ...args: any[]): void;
}
