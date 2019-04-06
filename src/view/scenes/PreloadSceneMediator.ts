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

    this._viewComponent.on(
      PreloadScene.LOAD_PROGRESS_EVENT,
      this.__onLoadProgress,
    );
    this._viewComponent.on(
      PreloadScene.LOAD_COMPLETE_EVENT,
      this.__onLoadComplete,
    );

    this.subscribe(PreloadScene.LOAD_COMPLETE_NOTIFICATION, this.__test);
    // this.unsubscribe(PreloadScene.LOAD_COMPLETE_NOTIFICATION);
  }

  private __onLoadProgress = (progress: number) => {
    this.facade.sendNotification(
      PreloadScene.LOAD_PROGRESS_NOTIFICATION,
      progress,
    );
  };

  private __onLoadComplete = () => {
    this.facade.sendNotification(PreloadScene.LOAD_COMPLETE_NOTIFICATION);
    // setInterval(() => {
    // }, 1000);
  };

  private __test = (progress: number) => {
    console.log('preload');
  };
}
