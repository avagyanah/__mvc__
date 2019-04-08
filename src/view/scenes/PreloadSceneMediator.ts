import { BaseSceneMediator } from './BaseSceneMediator';
import { PreloadScene } from './PreloadScene';
import { View } from '../../../mvcx/view/View';

export class PreloadSceneMediator extends BaseSceneMediator<PreloadScene> {
  public onRegister(view: View): void {
    super.onRegister(view);

    this.setViewComponent(window.TTT.sceneManager.get(
      PreloadScene.name,
    ) as PreloadScene);

    this.viewComponent.on('load-progress', this.__onLoadProgress, this);
    this.viewComponent.on('load-complete', this.__onLoadComplete, this);

    this.subscribe(PreloadScene.LOAD_PROGRESS, this.__loadProgress);
  }

  private __onLoadProgress(progress: number): void {
    this.facade.sendNotification(PreloadScene.LOAD_PROGRESS, progress);
  }

  private __onLoadComplete(): void {
    this.facade.sendNotification(PreloadScene.LOAD_COMPLETE);
  }

  private __loadProgress(progress: number): void {
    console.log(`preload LoadProgress | ${progress}`);
  }
}
