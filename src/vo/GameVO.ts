import { EventEmitter } from 'events';

export class GameVO {
  // public events: EventEmitter = new EventEmitter();
  private __someProp: any;

  constructor() {
    // this.__someProp = getObservableProperty();
  }

  public get someProp(): number {
    return this.__someProp;
  }

  public set someProp(value: number) {
    this.__someProp = value;
  }
}

// function getObservableProperty(name: string, value: any): any {
// const obj = {
//   get observe() {
//     console.log({ name: 'foo', object: obj, type: 'get' });
//     return obj._foo;
//   },
//   set bar(val) {
//     console.log({ name: 'bar', object: obj, type: 'set', oldValue: obj._bar });
//     return obj._bar = val;
//   }
// };
// }
