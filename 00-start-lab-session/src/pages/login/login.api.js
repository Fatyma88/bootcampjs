import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/login`;

export const isValidLogin = (login) => {
  return Axios.post(url, login).then(({ data }) => data);
};
