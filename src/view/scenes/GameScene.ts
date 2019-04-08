import { Atlases, Audios, Images } from '../../assets';
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

    new LogoView();
  }
}
