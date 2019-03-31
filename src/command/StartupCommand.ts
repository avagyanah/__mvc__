import { TTTFacade } from '../TTTFacade';

export function StartupCommand(
  facade: TTTFacade,
  notificationName: string,
): void {
  console.warn(facade, notificationName);
}
