export declare class Map<K, V> {
  public set(key: K, value: V): void;
  public get(key: K): V;
  public delete(key: K): void;
  public has(key: K): boolean;
  public clear(): void;
  public keys: K[];
}
