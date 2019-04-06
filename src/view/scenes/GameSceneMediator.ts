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

    this.subscribe(PreloadScene.LOAD_COMPLETE_NOTIFICATION, this.__test);
    // this.unsubscribe(PreloadScene.LOAD_COMPLETE_NOTIFICATION);
  }

  private __test = (progress: number) => {
    console.log('game');
  };
}
