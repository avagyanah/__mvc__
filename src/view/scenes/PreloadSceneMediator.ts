import { BaseSceneMediator } from './BaseSceneMediator';

export class PreloadSceneMediator extends BaseSceneMediator {
  static NAME: string = `PreloadSceneMediator`;

  constructor() {
    super();
  }

  public onRegister(): void {
    super.onRegister();
    console.warn(this.facade);

    this.facade.sendNotification('eka');
  }
}
