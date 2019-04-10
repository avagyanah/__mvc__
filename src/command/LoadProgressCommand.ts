import { Facade } from '../../mvcx/Facade';

export function LoadProgressCommand(
  facade: Facade,
  notification: string,
  progress: number,
): void {
  console.log(`load progress | ${progress}`);
}
