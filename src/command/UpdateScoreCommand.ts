import { GameProxy } from '../vo/GameProxy';
import { GameVO } from '../vo/GameVO';

export function UpdateScoreCommand(notification: string): void {
  const gameProxy: GameProxy = this.retrieveProxy(GameProxy);
  const gameVO: GameVO = gameProxy.vo;
  gameVO.someProp = 1;
}
