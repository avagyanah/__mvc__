import { BaseSceneMediator } from './BaseSceneMediator';
import { PreloadScene } from './PreloadScene';
import { GameScene } from './GameScene';
import { Facade } from '../../../mvcx/Facade';

export class GameSceneMediator extends BaseSceneMediator<GameScene> {
  public onRegister(
    facade: Facade,
    onMediatorNotificationSubscriptionChange: any,
  ): void {
    super.onRegister(facade, onMediatorNotificationSubscriptionChange);
    this.setViewComponent(window.TTT.sceneManager.get(
      GameScene.name,
    ) as PreloadScene);

    this._subscribe(PreloadScene.LOAD_COMPLETE, this._complete);
    this._unsubscribe(PreloadScene.LOAD_COMPLETE);
  }

  _complete(): void {
    console.warn('load complete');
  }
}
