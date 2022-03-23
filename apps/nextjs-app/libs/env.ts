import _ from 'lodash';
import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = _.defaultTo(getConfig(), {
  serverRuntimeConfig: {},
  publicRuntimeConfig: {},
});
const {
  API_URL,
}: {
  API_URL: string;
} = publicRuntimeConfig;

export const env = {
  API_URL,
};
