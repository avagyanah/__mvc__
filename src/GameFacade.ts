import { Facade } from '../mvcx/Facade';
import { StartupCommand } from './command/StartupCommand';
import { PreloadSceneMediator } from './view/scenes/PreloadSceneMediator';
import { PreloadScene } from './view/scenes/PreloadScene';
import { LoadProgressCommand } from './command/LoadProgressCommand';
import { LoadCompleteCommand } from './command/LoadCompleteCommand';
import { GameSceneMediator } from './view/scenes/GameSceneMediator';
import { GameProxy } from './vo/GameProxy';
import { LogoView } from './view/components/LogoView';
import { LogoMediator } from './view/components/LogoMediator';

export class GameFacade extends Facade {
  static STARTUP: string = `${GameFacade.name}Startup`;

  public initialize(debug: boolean = false) {
    super.initialize(debug);

    this.sendNotification(GameFacade.STARTUP, 1, 2, 3);
  }

  protected initializeModel() {
    super.initializeModel();

    this.registerProxy(GameProxy);
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

    this.registerDynamicMediator(LogoView, LogoMediator);
  }
}
