import { Proxy } from '../../mvcx/model/Proxy';

export class GameProxy<T> extends Proxy<T> {
  static NAME: string = `GameProxy`;

  constructor() {
    super();
  }
}
