import { Facade } from '../../mvc/Facade';

export function LoadCompleteCommand(
  facade: Facade,
  notification: string,
): void {
  console.warn('LOAD COMPLETE');
}
