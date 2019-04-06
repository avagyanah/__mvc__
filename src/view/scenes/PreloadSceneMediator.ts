import { BaseSceneMediator } from './BaseSceneMediator';
import { PreloadScene } from './PreloadScene';
import { View } from '../../../mvcx/view/View';

export class PreloadSceneMediator extends BaseSceneMediator<PreloadScene> {
  static NAME: string = `PreloadSceneMediator`;

  constructor() {
    super();
  }

  public onRegister(view: View): void {
    super.onRegister(view);

    this.setViewComponent(window.TTT.sceneManager.get(
      PreloadScene.NAME,
    ) as PreloadScene);

    this._viewComponent.on('load-progress', this.__onLoadProgress);
    this._viewComponent.on('load-complete', this.__onLoadComplete);

    this.subscribe(PreloadScene.LOAD_PROGRESS, this.__loadProgress);
    this.subscribe(PreloadScene.LOAD_COMPLETE, this.__loadComplete);
  }

  private __onLoadProgress = (progress: number) => {
    this.facade.sendNotification(PreloadScene.LOAD_PROGRESS, progress);
  };

  private __onLoadComplete = () => {
    this.facade.sendNotification(PreloadScene.LOAD_COMPLETE, 3);
  };

  private __loadProgress(progress: number): void {
    console.log(`preload LoadProgress | ${progress}`);
  }

  private __loadComplete(): void {
    console.warn(`preload LoadComplete`);
  }
}
