import { StaticMediator } from '../../../mvc/view/StaticMediator';
import BaseScene from './BaseScene';

export class BaseSceneMediator<T extends BaseScene> extends StaticMediator<T> {}
