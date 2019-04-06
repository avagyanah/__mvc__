import { Facade } from '../../mvcx/Facade';
import { PreloadSceneMediator } from '../view/scenes/PreloadSceneMediator';

export function LoadCompleteCommand(
  facade: Facade,
  notification: string,
): void {
  facade.removeMediator(PreloadSceneMediator.NAME);
}
