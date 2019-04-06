import { BaseSceneMediator } from './BaseSceneMediator';
import { View } from '../../../mvcx/view/View';
import { PreloadScene } from './PreloadScene';

export class GameSceneMediator extends BaseSceneMediator<any> {
  static NAME: string = `GameSceneMediator`;

  constructor() {
    super();
  }

  public onRegister(view: View): void {
    super.onRegister(view);

    this.subscribe(PreloadScene.LOAD_PROGRESS, this.__loadProgress);
    this.subscribe(PreloadScene.LOAD_COMPLETE, this.__loadComplete);
  }

  private __loadProgress(progress: number): void {
    console.log(`game LoadProgress | ${progress}`);
  }

  private __loadComplete(): void {
    console.warn(`game LoadComplete`);
  }
}
