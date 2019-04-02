import { SimpleMap } from '../utils/SimpleMap';
import { Facade } from '../Facade';

export declare class Controller {
  constructor(facade: Facade);
  public registerCommand(
    key: string,
    command: (
      facade: Facade,
      key: string,
      body?: object,
    ) => Promise<void> | void,
  ): void;
  public executeCommand(facade: Facade, key: string, body?: object): void;
  protected commandsMap: SimpleMap;
  private facade: Facade;
}
