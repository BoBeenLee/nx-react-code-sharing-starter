import axios from 'axios';

export const initialize = (baseURL: string) => {
  axios.defaults.baseURL = baseURL;
};
