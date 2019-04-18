import { IDynamicView } from '../../../mvcx/view/View';
import { uuid } from '../../../mvcx/utils';

export class LogoView extends PIXI.DisplayObject implements IDynamicView {
  private __uuid: string;
  construct: () => void;
  destruct: () => void;

  get uuid(): string {
    return this.__uuid;
  }

  constructor(id?: string) {
    super();
    this.__uuid = id || uuid(this.constructor.name);
    this.construct();
  }

  public destroy(): void {
    super.destroy();
    this.destruct();
  }
}
