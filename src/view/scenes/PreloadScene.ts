import { Atlases, Audios, Images } from '../../assets';
import { IGame } from '../../constants/Types';
import BaseScene from './BaseScene';
import { LogoView } from '../components/LogoView';
//
export let GENERAL_ASSETS: PIXI.loaders.TextureDictionary;
//
export class PreloadScene extends BaseScene {
  static LOAD_PROGRESS: string = `${PreloadScene.name}LoadProgress`;
  static LOAD_COMPLETE: string = `${PreloadScene.name}LoadComplete`;

  constructor(game: IGame) {
    super(game);
  }

  public create(): void {
    this.startInitialAssetsLoad();
    //
    super.create();
  }

  private startInitialAssetsLoad(): void {
    const loader: PIXI.loaders.Loader = PIXI.loader;
    loader.add(Images.ProfileIcon.Name, Images.ProfileIcon.FileURL);
    loader.add(Images.LogoImage.Name, Images.LogoImage.FileURL);
    loader.load();
    loader.onLoad.add(this.onFileLoadComplete, this);
    loader.onComplete.add(this.onInitialAssetsLoadComplete, this);
  }

  private onFileLoadComplete(
    loader: PIXI.loaders.Loader,
    resource: PIXI.loaders.Resource,
  ): void {
    this.emit('load-progress', loader.progress);
  }

  private onInitialAssetsLoadComplete(loader: PIXI.loaders.Loader): void {
    this.emit('load-complete');
  }
}
