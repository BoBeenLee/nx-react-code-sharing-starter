import axios from 'axios';

export const customAPI = async <T>(params: { url: string }) => {
  const { url } = params;
  const response = await axios.get<T>(url);
  return response.data;
};
