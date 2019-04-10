import { Facade } from '../../mvcx/Facade';
import { GameProxy } from '../vo/GameProxy';
import { GameVO } from '../vo/GameVO';

export function UpdateScoreCommand(facade: Facade, notification: string): void {
  const gameProxy: GameProxy = facade.retrieveProxy(GameProxy.name);
  const gameVO: GameVO = gameProxy.vo;
  gameVO.someProp = 1;
}
