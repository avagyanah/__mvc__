import { BaseSceneMediator } from './BaseSceneMediator';
import { View } from '../../../mvcx/view/View';
import { PreloadScene } from './PreloadScene';
import { GameScene } from './GameScene';

export class GameSceneMediator extends BaseSceneMediator<GameScene> {
  public onRegister(view: View): void {
    super.onRegister(view);

    this.setViewComponent(window.TTT.sceneManager.get(
      GameScene.name,
    ) as PreloadScene);

    console.warn('register');
  }
}
