import { uuid } from '../../../mvcx/utils';

export class BaseView extends PIXI.DisplayObject {
  private __uuid: string;
  constructor(id: string) {
    super();
    this.__uuid = id || uuid(this.constructor.name);
    this.construct();
  }

  public destroy(): void {
    super.destroy();
    this.destruct();
  }

  public construct(): void {}

  public destruct(): void {}

  public get uuid(): string {
    return this.__uuid;
  }
}
