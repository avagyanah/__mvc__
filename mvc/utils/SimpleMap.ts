export class SimpleMap<K, V> {
  public set(key: K, value: V): void {
    //@ts-ignore
    this[key] = value;
  }

  public get(key: K): V {
    // @ts-ignore
    return this[key];
  }
}
