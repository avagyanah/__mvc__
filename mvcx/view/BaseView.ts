export class BaseView extends PIXI.DisplayObject {
  static CREATE: string = 'create';
  constructor() {
    super();
    //@ts-ignore
    this.construct(this);
  }

  public destroy(): void {
    super.destroy();
    //@ts-ignore
    this.destruct(this);
  }
}

Object.defineProperty(BaseView.prototype, 'construct', {
  value: function() {},
  configurable: true,
  writable: true,
  enumerable: false,
});

Object.defineProperty(BaseView.prototype, 'destruct', {
  value: function() {},
  configurable: true,
  writable: true,
  enumerable: false,
});
