import { SimpleMap } from './utils/SimpleMap';
import { Facade } from './Facade';

export declare class Controller {
  protected commandsMap: SimpleMap;
  public registerCommand(
    key: string,
    command: (key: string, body?: object) => Promise<void> | void,
  ): void;
  public executeCommand(facade: Facade, key: string, body?: object): void;
  private facade: Facade;
}
