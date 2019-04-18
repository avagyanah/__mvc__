import { BaseSceneMediator } from './BaseSceneMediator';
import { PreloadScene } from './PreloadScene';
import { View } from '../../../mvcx/view/View';
import { Facade } from '../../../mvcx/Facade';

export class PreloadSceneMediator extends BaseSceneMediator<PreloadScene> {
  public onRegister(
    facade: Facade,
    onMediatorNotificationSubscriptionChange: any,
  ): void {
    super.onRegister(facade, onMediatorNotificationSubscriptionChange);

    this.setViewComponent(window.TTT.sceneManager.get(
      PreloadScene.name,
    ) as PreloadScene);

    this.viewComponent.on('load-progress', this.__onLoadProgress, this);
    this.viewComponent.on('load-complete', this.__onLoadComplete, this);
  }

  private __onLoadProgress(progress: number): void {
    this.facade.sendNotification(PreloadScene.LOAD_PROGRESS, progress);
  }

  private __onLoadComplete(): void {
    this.facade.sendNotification(PreloadScene.LOAD_COMPLETE);
  }
}
