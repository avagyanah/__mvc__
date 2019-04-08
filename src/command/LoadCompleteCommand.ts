import { Facade } from '../../mvcx/Facade';
import { PreloadSceneMediator } from '../view/scenes/PreloadSceneMediator';
import { GameScene } from '../view/scenes/GameScene';
import { PreloadScene } from '../view/scenes/PreloadScene';

export function LoadCompleteCommand(
  facade: Facade,
  notification: string,
): void {
  facade.removeMediator(PreloadSceneMediator.name);
  window.TTT.sceneManager.destroy(PreloadScene.name);
  window.TTT.sceneManager.start(GameScene.name);
}
