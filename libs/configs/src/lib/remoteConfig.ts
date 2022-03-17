import { isJSON, isEmpty } from '@nx-react-code-sharing/utils';

type RemoteConfigType = 'test';

export function remoteConfigFactory(
  getStringValue: (key: string) => Promise<string>,
  getBooleanValue: (key: string) => Promise<boolean>
) {
  const getStringWithDefault = async (
    key: RemoteConfigType,
    defaultValue: string
  ) => {
    try {
      const value = await getStringValue(key);
      return !isEmpty(value) ? value : defaultValue;
    } catch (error) {
      return defaultValue;
    }
  };

  const getBooleanWithDefault = async (
    key: RemoteConfigType,
    defaultValue: boolean
  ) => {
    try {
      return await getBooleanValue(key);
    } catch (error) {
      return defaultValue;
    }
  };

  const getJSONWithDefault = async <T>(
    key: RemoteConfigType,
    defaultValue: T
  ) => {
    const val = await getStringValue(key);
    if (!isJSON(val)) {
      return defaultValue;
    }
    try {
      return JSON.parse(val) as T;
    } catch (error) {
      // NOTHING
    }
    return defaultValue;
  };

  const getRemoteConfigs = {
    test: () => {
      return getStringWithDefault('test', '');
    },
  };

  return {
    ...getRemoteConfigs,
    getStringWithDefault,
    getBooleanWithDefault,
    getJSONWithDefault,
  };
}
