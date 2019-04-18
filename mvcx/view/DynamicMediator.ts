import { Mediator } from './Mediator';

export class DynamicMediator<T> extends Mediator<T> {
  protected get mediatorName(): string {
    //@ts-ignore
    return this.viewComponent.uuid;
  }
}
