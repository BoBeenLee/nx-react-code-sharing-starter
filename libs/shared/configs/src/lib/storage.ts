import {
  isJSON,
  isEmpty,
  defaultNumber,
} from '@nx-react-code-sharing/shared-utils';

type StorageType = 'ACCESS_TOKEN' | 'REFRESH_TOKEN' | 'test';

export function storageFactory(
  setItem: (key: string, value: string) => Promise<any>,
  getItem: (key: string) => Promise<string>,
  clear: () => void
) {
  const setStorageItem = (key: StorageType, value: string) => {
    return setItem(key, value);
  };

  const getStringWithDefault = async (
    key: StorageType,
    defaultItem: string
  ): Promise<string> => {
    try {
      const itemString = await getItem(key);
      return isEmpty(itemString) ? defaultItem : itemString;
    } catch (error) {
      return defaultItem;
    }
  };

  const getBooleanWithDefault = async (
    key: StorageType,
    defaultItem: boolean
  ): Promise<boolean> => {
    try {
      const itemString = await getItem(key);
      return isEmpty(itemString) ? defaultItem : itemString === 'true';
    } catch (error) {
      return defaultItem;
    }
  };

  const getNumberWithDefault = async (
    key: StorageType,
    defaultItem: number
  ): Promise<number> => {
    try {
      const itemString = await getItem(key);
      return defaultNumber(itemString, defaultItem);
    } catch (error) {
      return defaultItem;
    }
  };

  const getJSONWithDefault = async <T>(
    key: StorageType,
    defaultItem: T
  ): Promise<T> => {
    try {
      const itemJSON = await getItem(key);
      if (!isJSON(itemJSON)) {
        return defaultItem;
      }
      return JSON.parse(itemJSON) as T;
    } catch (error) {
      // NOTHING
    }
    return defaultItem;
  };

  const setStorages = {
    saveTest: async (value: string) => {
      await setStorageItem('test', value);
    },
  };

  const getStorages = {
    test: () => {
      return getStringWithDefault('test', '');
    },
  };

  return {
    ...setStorages,
    ...getStorages,
    setItem,
    getStringWithDefault,
    getBooleanWithDefault,
    getNumberWithDefault,
    getJSONWithDefault,
    clear,
  };
}
