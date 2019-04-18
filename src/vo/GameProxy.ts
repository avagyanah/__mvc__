import { Proxy } from '../../mvcx/model/Proxy';
import { GameVO } from './GameVO';
import { Facade } from '../../mvcx/Facade';

export class GameProxy extends Proxy<GameVO> {
  constructor() {
    super();
  }

  public onRegister(facade: Facade): void {
    super.onRegister(facade);
    this.vo = new GameVO();
  }
}
