import axios from 'axios';

export const test = async () => {
  const response = await axios.get(`/api/test`);
  console.log(response.data);
};
