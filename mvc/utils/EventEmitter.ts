// import { SimpleMap } from './SimpleMap';

// export class EventEmitter {
//   private __eventsMap: SimpleMap<string, any>;

//   constructor() {
//     this.__eventsMap = new SimpleMap();
//   }

//   public emit(eventName: string, ...args: any[]): void {
//     const callback = this.__eventsMap.get(eventName);
//     callback && callback(eventName, ...args);
//   }

//   public on(eventName: string, callback: any): void {
//     this.__eventsMap.set(eventName, callback);
//   }

//   public off(eventName: string): void {
//     this.__eventsMap.delete(eventName);
//   }
// }
