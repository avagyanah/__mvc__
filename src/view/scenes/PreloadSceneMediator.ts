import { BaseSceneMediator } from './BaseSceneMediator';

export class PreloadSceneMediator extends BaseSceneMediator {
  static NAME: string = `PreloadSceneMediator`;

  constructor() {
    super();
    //@ts-ignore
    // console.warn(this.facade);
  }
}
