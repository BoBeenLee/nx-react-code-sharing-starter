import {
  traverseObjectKeys,
  traverseObjectSliceStr,
  omit,
} from '@nx-react-code-sharing/shared-utils';

const EVENT_TYPE_MAX_LENGTH = 40;

export type EventType = 'test';

export interface IEventResult {
  eventType: EventType;
  [key: string]: any;
}

export function firebaseAnalyticsFactory(
  funcAnalytics: (eventName: string, params: object) => void,
  setUserId: (userId: string) => void,
  setCurrentScreen: (screenName: string) => void
) {
  function firebaseLogEvent(eventData: IEventResult) {
    const { eventType } = eventData;

    if (!eventType) {
      throw new Error('eventType is not provided!');
    }

    if (eventType.length > EVENT_TYPE_MAX_LENGTH) {
      throw new Error(
        `${eventType} has over ${EVENT_TYPE_MAX_LENGTH} characters!`
      );
    }

    const isAllKeysUnderLength40 = traverseObjectKeys(
      omit(eventData, 'eventType'),
      (key: string) => key.length <= EVENT_TYPE_MAX_LENGTH
    );

    if (!isAllKeysUnderLength40) {
      return;
    }

    const parameters = traverseObjectSliceStr(
      omit(eventData, 'eventType'),
      100
    );
    funcAnalytics(eventData.eventType, parameters);
  }
  return {
    setUserId: (userId: string) => {
      setUserId(userId);
    },
    setCurrentScreen: (screenName: string) => {
      setCurrentScreen(screenName);
    },
    test: () => {
      firebaseLogEvent({
        eventType: 'test',
      });
    },
  };
}
