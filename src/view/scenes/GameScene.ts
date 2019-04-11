import { IGame } from '../../constants/Types';
import BaseScene from './BaseScene';
import { LogoView } from '../components/LogoView';
import { ProfileView } from '../components/ProfileView';
//
export let GENERAL_ASSETS: PIXI.loaders.TextureDictionary;
//
export class GameScene extends BaseScene {
  constructor(game: IGame) {
    super(game);
  }

  public create(): void {
    super.create();

    const logoView: LogoView = new LogoView();
    const profileView: ProfileView = new ProfileView();
    const logoView2: LogoView = new LogoView();

    logoView.destroy();
    profileView.destroy();
    // new LogoView();
    // new ProfileView();
    // new LogoView();
  }
}
