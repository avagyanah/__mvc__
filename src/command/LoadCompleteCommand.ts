import { PreloadSceneMediator } from '../view/scenes/PreloadSceneMediator';
import { GameScene } from '../view/scenes/GameScene';
import { PreloadScene } from '../view/scenes/PreloadScene';
import { UpdateScoreCommand } from './UpdateScoreCommand';

export function LoadCompleteCommand(notification: string): void {
  this.removeMediator(PreloadSceneMediator.name);
  window.TTT.sceneManager.destroy(PreloadScene.name);
  window.TTT.sceneManager.start(GameScene.name);

  UpdateScoreCommand.call(this, notification);
}
