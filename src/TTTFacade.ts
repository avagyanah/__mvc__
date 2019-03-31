import { StartupCommand } from './command/StartupCommand';
import { Facade } from './mvc/Facade';
import { PreloadSceneMediator } from './view/scenes/PreloadSceneMediator';

export class TTTFacade extends Facade {
  static NAME: string = `GameFacade`;
  static STARTUP: string = `${TTTFacade.NAME}Startup`;

  public initialize(): void {
    super.initialize();
    this.sendNotification(TTTFacade.STARTUP);
  }

  protected initializeModel(): void {
    super.initializeModel();
  }

  protected initializeController(): void {
    super.initializeController();

    this.registerCommand(TTTFacade.STARTUP, StartupCommand);
  }

  protected initializeView(): void {
    super.initializeView();

    this.registerStaticMediator(PreloadSceneMediator);
  }
}