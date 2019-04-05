import { Facade } from '../../mvc/Facade';

export function LoadProgressCommand(
  facade: Facade,
  notification: string,
  progress: number,
): void {
  console.warn(`LOAD PROGRESS | ${progress}`);
}
