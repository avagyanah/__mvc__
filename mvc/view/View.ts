import { Facade } from '../Facade';
import { SimpleMap } from '../utils/SimpleMap';
import { StaticMediator } from './StaticMediator';

export class View {
  private __staticMediatorsMap: SimpleMap<string, StaticMediator>;

  constructor(private __facade: Facade) {
    this.__staticMediatorsMap = new SimpleMap();
  }

  public registerStaticMediator(key: string, mediator: StaticMediator): void {
    this.__staticMediatorsMap.set(key, mediator);
    mediator.onRegister(this.__facade);
  }
}
