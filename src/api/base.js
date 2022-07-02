import Axios from 'axios';
import { getRequestError, getRequestSuccess } from './interceptors';

export async function checkData(url, method, base = process.env.REACT_APP_URL) {
  try {
    const data = await Axios[method](`${base}/api/${url}`);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

export async function fetchData(url, method, base) {
  const [data, error] = await checkData(url, method, base);

  if (!error) {
    return [data, null];
  } else {
    return [null, error];
  }
}

/**
 *
 * root use in msw api
 */
export const baseInstance = function (options) {
  const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}/api/`,
    headers: {},
  });

  axios.interceptors.request.use(getRequestSuccess(options), getRequestError(options));

  return axios;
};

export const request = baseInstance();

// export const apiGetNote = () => request.get(`word`);
export const Notes = {
  getAll: () => request.get(`words`),
  postWord: (title, describe) => request.post(`words/create`, { title, describe }),
  deleteWord: (id) => request.delete(`words/${id}`),
  updateWord: (id, describe) => request.put(`words/${id}`, { describe }),
};
