import { DynamicMediator } from '../../../mvcx/view/DynamicMediator';
import { LogoView } from './LogoView';
import { View } from '../../../mvcx/view/View';

export class LogoMediator extends DynamicMediator<LogoView> {
  public onRegister(view: View): void {
    super.onRegister(view);
    console.warn(`onRegister ${this.constructor.name}`);
  }

  public onRemove(): void {
    super.onRemove();
    console.warn(`onRemove ${this.constructor.name}`);
  }
}
