export const setLocalStorage = (key: string, value: string) =>
  typeof window !== "undefined"
    ? window.localStorage.setItem(key, value)
    : undefined;
export const getLocalStorage = (key: string) =>
  typeof window !== "undefined"
    ? window.localStorage.getItem(key) ?? null
    : null;
export const removeLocalStorage = (key: string): void =>
  typeof window !== "undefined"
    ? window.localStorage.removeItem(key)
    : undefined;

interface LocalStorageManagerInterface<T> {
  get(): T | null;
  set(data: T): void;
  remove(): void;
}

export class LocalStorageManager<T = string>
  implements LocalStorageManagerInterface<T>
{
  private readonly storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  get(): T | null {
    const data = getLocalStorage(this.storageKey);
    if (!data) {
      return null;
    }
    return JSON.parse(data);
  }

  set(data: T) {
    setLocalStorage(this.storageKey, JSON.stringify(data));
  }

  remove() {
    removeLocalStorage(this.storageKey);
  }
}
