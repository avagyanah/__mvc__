import { IGame } from '../../constants/Types';
import BaseScene from './BaseScene';
import { LogoView } from '../components/LogoView';
//
export let GENERAL_ASSETS: PIXI.loaders.TextureDictionary;
//
export class GameScene extends BaseScene {
  constructor(game: IGame) {
    super(game);
  }

  public create(): void {
    super.create();

    // const logoView1: LogoView = new LogoView('12345');
    // const logoView2: LogoView = new LogoView();
    // const logoView3: LogoView = new LogoView();

    // logoView1.destroy();
    // logoView2.destroy();
    // logoView3.destroy();
  }
}
