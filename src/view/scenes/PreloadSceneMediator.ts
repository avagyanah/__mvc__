import { BaseSceneMediator } from './BaseSceneMediator';
import { Facade } from '../../../mvc/Facade';

export class PreloadSceneMediator extends BaseSceneMediator {
  static NAME: string = `PreloadSceneMediator`;

  constructor() {
    super();
  }

  public onRegister(facade: Facade): void {
    super.onRegister(facade);
  }
}
