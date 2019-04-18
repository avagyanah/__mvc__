export function logCommand(
  consoleArgs: string[],
  notificationName: string,
  commandName: string,
): void {
  consoleArgs[0] = `%c %c %c ${notificationName} =>  ${commandName} %c %c `;
  console.log.apply(console, consoleArgs);
}

export function logNotification(
  consoleArgs: string[],
  notificationName: string,
): void {
  consoleArgs[0] = `%c %c %c ${notificationName}%c %c `;
  console.log.apply(console, consoleArgs);
}

export function logMediator(
  consoleArgs: string[],
  name: string,
  action: string,
): void {
  consoleArgs[0] = `%c %c %c ${name}: ${action} %c %c `;
  console.log.apply(console, consoleArgs);
}

export function logProxy(
  consoleArgs: string[],
  name: string,
  action: string,
): void {
  consoleArgs[0] = `%c %c %c ${name}: ${action} %c %c `;
  console.log.apply(console, consoleArgs);
}

export function logNone(consoleArgs: string[], ...args: any[]): void {}

export const uuid = (function() {
  let num = 0;
  return function(prefix: string = '') {
    const value = ++num < 10 ? '0' + num : num;
    return `${prefix}${value.toString()}`;
  };
})();

export class MVCMap<T> {
  [key: string]: any;

  public set(key: string, value: T): void {
    this[key] = value;
  }

  public get(key: string): T {
    return this[key];
  }

  public has(key: string): boolean {
    return !!this[key];
  }

  public delete(key: string): T {
    const value = this[key];
    delete this[key];
    return value;
  }

  public forEach(fn: (key: string, value?: T) => any): void {
    for (var key in this) if (this.hasOwnProperty(key)) fn(key, this[key]);
  }
}
