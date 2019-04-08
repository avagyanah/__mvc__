import { Proxy } from '../../mvcx/model/Proxy';
import { Model } from '../../mvcx/model/Model';
import { GameVO } from './GameVO';

export class GameProxy extends Proxy<GameVO> {
  constructor() {
    super();
  }

  public onRegister(model: Model): void {
    super.onRegister(model);

    this.vo = new GameVO();
  }
}