export class SimpleMap<K, V> {
  public set(key: K, value: V): void {
    //@ts-ignore
    this[key] = value;
  }

  public get(key: K): V {
    // @ts-ignore
    return this[key];
  }

  public delete(key: K): void {
    // @ts-ignore
    this[key] = null;
    // @ts-ignore
    delete this[key];
  }
}
