import { Facade } from '../Facade';
import { Proxy } from './Proxy';

export class Model {
  public facade: Facade;
  private __proxiesMap: Map<string, Proxy<any>>;

  constructor(facade: Facade) {
    this.facade = facade;
    this.__proxiesMap = new Map();
  }

  public registerProxy(proxy: new () => Proxy<any>): Proxy<any> {
    const proxyInstance = new proxy();
    const name = proxyInstance.constructor.name;
    this.__proxiesMap.set(name, proxyInstance);
    proxyInstance.onRegister(this);
    return proxyInstance;
  }

  public removeProxy(key: string): void {
    if (!this.__proxiesMap.has(key)) {
      return;
    }

    let proxy = this.__proxiesMap.get(key);
    this.__proxiesMap.delete(key);

    proxy.onRemove();
    proxy = null;
  }

  public hasProxy(key: string): boolean {
    return this.__proxiesMap.has(key);
  }

  public retrieveProxy(key: string): Proxy<any> {
    return this.__proxiesMap.get(key);
  }
}
