import { Facade } from '../mvc/Facade';
import { StartupCommand } from './command/StartupCommand';
import { PreloadSceneMediator } from './view/scenes/PreloadSceneMediator';

export class GameFacade extends Facade {
  static NAME: string = `GameFacade`;
  static STARTUP: string = `${GameFacade.NAME}Startup`;

  public initialize() {
    super.initialize();

    this.sendNotification(GameFacade.STARTUP);
  }

  protected initializeModel() {
    super.initializeModel();
  }

  protected initializeController() {
    super.initializeController();

    this.registerCommand(GameFacade.STARTUP, StartupCommand);
  }

  protected initializeView() {
    super.initializeView();

    this.registerStaticMediator(
      PreloadSceneMediator.NAME,
      new PreloadSceneMediator(),
    );
  }
}
