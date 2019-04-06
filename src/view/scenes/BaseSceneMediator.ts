import { StaticMediator } from '../../../mvcx/view/StaticMediator';
import BaseScene from './BaseScene';

export class BaseSceneMediator<T extends BaseScene> extends StaticMediator<T> {}
