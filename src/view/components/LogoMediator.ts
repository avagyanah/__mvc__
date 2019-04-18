import { LogoView } from './LogoView';
import { Facade } from '../../../mvcx/Facade';
import { DynamicMediator } from '../../../mvcx/view/DynamicMediator';

export class LogoMediator extends DynamicMediator<LogoView> {
  public onRegister(
    facade: Facade,
    onMediatorNotificationSubscriptionChange: any,
  ): void {
    super.onRegister(facade, onMediatorNotificationSubscriptionChange);
  }

  public onRemove(): void {
    super.onRemove();
  }
}
