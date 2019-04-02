import { Facade } from '../Facade';
import { SimpleMap } from '../utils/SimpleMap';

export class Controller {
  private __commandsMap: SimpleMap<string, ICommand>;

  constructor(private __facade: Facade) {
    this.__commandsMap = new SimpleMap();
  }

  public registerCommand(key: string, command: ICommand): void {
    this.__commandsMap.set(key, command);
  }

  public executeCommand(key: string, ...args: any[]): void {
    const command: ICommand = this.__commandsMap.get(key);
    command && command(this.__facade, key, ...args);
  }
}

export interface ICommand {
  (facade: Facade, notificationName: string, ...args: any[]): void;
}
