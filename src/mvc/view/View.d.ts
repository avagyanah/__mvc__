import { SimpleMap } from '../utils/SimpleMap';
import { Facade } from '../Facade';
import { StaticMediator } from './StaticMediator';

export declare class View {
  constructor(facade: Facade);
  public registerStaticMediator(mediatorClass: new () => StaticMediator): void;
  protected staticMediatorsMap: SimpleMap;
  protected dynamicMediatorsMap: SimpleMap;
  private facade: Facade;
}
