import { BaseSceneMediator } from './BaseSceneMediator';
import { View } from '../../../mvcx/view/View';
import { PreloadScene } from './PreloadScene';

export class GameSceneMediator extends BaseSceneMediator<any> {
  static NAME: string = `GameSceneMediator`;

  public onRegister(view: View): void {
    super.onRegister(view);

    this.subscribe(PreloadScene.LOAD_COMPLETE, this.__loadComplete);
  }

  private __loadComplete(): void {
    console.log(`game LoadComplete`);
  }
}
