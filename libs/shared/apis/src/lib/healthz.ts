import axios from 'axios';

export const healthz = async () => {
  const response = await axios.get(`/api/healthz`);
  return response.data;
};
