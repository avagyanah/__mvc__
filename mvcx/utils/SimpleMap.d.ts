export declare class SimpleMap<K, V> {
  public set(key: K, value: V): void;
  public get(key: K): V;
  public delete(key: K): void;
  public values: V[];
}
