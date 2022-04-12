const APP_NAME = '@AppName';

const getItem = (item: string): any =>
  localStorage.getItem(`${APP_NAME}:${item}`);

const setItem = (item: string, value: any): void =>
  localStorage.setItem(`${APP_NAME}:${item}`, value);

const clear = (): void => localStorage.clear();

export default { getItem, setItem, clear };
