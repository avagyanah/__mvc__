import { Atlases, Audios, Images } from '../../assets';
import { IGame } from '../../constants/Types';
import BaseScene from './BaseScene';
//
export let GENERAL_ASSETS: PIXI.loaders.TextureDictionary;
//
export class PreloadScene extends BaseScene {
  static NAME = `PreloadScene`;

  static LOAD_PROGRESS: string = `${PreloadScene.NAME}LoadProgress`;
  static LOAD_COMPLETE: string = `${PreloadScene.NAME}LoadComplete`;

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
    loader.add('general', 'assets/atlases/general.json');
    loader.add(Images.ProfileIcon.Name, Images.ProfileIcon.FileURL);
    //
    loader.add(Audios.Sounds.ClickSound.Name, Audios.Sounds.ClickSound.Mp3URL);
    loader.add(
      Audios.Sounds.WelcomeSound.Name,
      Audios.Sounds.WelcomeSound.Mp3URL,
    );
    //
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
    this.initializeAtlasKeys();
    this.emit('load-complete');
  }

  private initializeAtlasKeys(): void {
    GENERAL_ASSETS = PIXI.loader.resources[Atlases.General.Atlas.Name].textures;
  }
}
