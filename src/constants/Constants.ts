import { gameConfig } from './GameConfig';

const PRELOAD_SCENE: string = 'PreloadScene';
const GAME_SCENE: string = 'GameScene';
const GAME_WIDTH: number = gameConfig.width;
const GAME_HEIGHT: number = gameConfig.height;
const CENTER: PIXI.Point = new PIXI.Point(GAME_WIDTH * 0.5, GAME_HEIGHT * 0.5);

export { PRELOAD_SCENE, GAME_SCENE, GAME_WIDTH, GAME_HEIGHT, CENTER };
