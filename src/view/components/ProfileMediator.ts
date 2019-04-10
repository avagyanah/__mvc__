import { DynamicMediator } from '../../../mvcx/view/DynamicMediator';
import { ProfileView } from './ProfileView';
import { View } from '../../../mvcx/view/View';

export class ProfileMediator extends DynamicMediator<ProfileView> {
  public onRegister(view: View): void {
    super.onRegister(view);
  }

  public onRemove(): void {
    super.onRemove();
  }
}
