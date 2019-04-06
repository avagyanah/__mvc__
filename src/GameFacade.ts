import { Facade } from '../mvcx/Facade';
import { StartupCommand } from './command/StartupCommand';
import { PreloadSceneMediator } from './view/scenes/PreloadSceneMediator';
import { PreloadScene } from './view/scenes/PreloadScene';
import { LoadProgressCommand } from './command/LoadProgressCommand';
import { LoadCompleteCommand } from './command/LoadCompleteCommand';
import { GameSceneMediator } from './view/scenes/GameSceneMediator';

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
    this.registerCommand(PreloadScene.LOAD_PROGRESS, LoadProgressCommand);
    this.registerCommand(PreloadScene.LOAD_COMPLETE, LoadCompleteCommand);
  }

  protected initializeView() {
    super.initializeView();

    this.registerMediator(PreloadSceneMediator);
    this.registerMediator(GameSceneMediator);
    // this.removeStaticMediator(GameSceneMediator.NAME);
    // this.removeStaticMediator(PreloadSceneMediator.NAME);
  }
}
