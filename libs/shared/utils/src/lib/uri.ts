import * as qs from 'qs';

import { isEmpty } from './common';

export const makeQueryParams = <T>(search: string, defaultValue?: T) => {
  const response: T = qs.parse(search.substring(1)) as any;
  if (isEmpty(response)) {
    return defaultValue!;
  }
  return response;
};
