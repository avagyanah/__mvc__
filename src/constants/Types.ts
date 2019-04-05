declare global {
  // tslint:disable-next-line
  interface Window {
    TTT: IGame;
    FBInstant: any;
  }
}

//
export interface IGame extends PIXI.Application {
  config: IGameConfig;
  sceneManager: ISceneManager;
}
//
export interface IScene {
  create: () => void;
  destroy: () => void;
  wake: () => void;
  sleep: () => void;
}
//
export interface ISceneManager {
  add: (key: string, scene: any) => void;
  start: (key: string) => void;
  destroy: (key: string) => void;
  wake: (key: string) => void;
  sleep: (key: string) => void;
  get: (key: string) => IScene;
}
//
export interface IGameConfig {
  width: number;
  height: number;
  backgroundColor?: number;
  forceCanvas?: boolean;
  roundPixels?: boolean;
  autoResize?: boolean;
  transparent?: boolean;
}
//
