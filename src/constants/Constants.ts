import { gameConfig } from './GameConfig';

const GAME_WIDTH: number = gameConfig.width;
const GAME_HEIGHT: number = gameConfig.height;
const CENTER: PIXI.Point = new PIXI.Point(GAME_WIDTH * 0.5, GAME_HEIGHT * 0.5);

export { GAME_WIDTH, GAME_HEIGHT, CENTER };
