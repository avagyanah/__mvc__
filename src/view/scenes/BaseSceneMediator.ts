import { Mediator } from '../../../mvcx/view/Mediator';
import BaseScene from './BaseScene';

export class BaseSceneMediator<T extends BaseScene> extends Mediator<T> {}
