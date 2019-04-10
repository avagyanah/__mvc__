import { DynamicMediator } from '../../../mvcx/view/DynamicMediator';
import { ProfileView } from './ProfileView';
import { View } from '../../../mvcx/view/View';

export class ProfileMediator extends DynamicMediator<ProfileView> {
  public onRegister(view: View): void {
    super.onRegister(view);
    console.warn(`onRegister ${this.constructor.name}`);
  }

  public onRemove(): void {
    super.onRemove();
    console.warn(`onRemove ${this.constructor.name}`);
  }
}
