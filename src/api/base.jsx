import axios from 'axios';

export async function checkData(url, method) {
  try {
    const data = await axios[method](`${process.env.REACT_APP_URL}/api/${url}`);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

export async function fetchData(url, method) {
  const [data, error] = await checkData(url, method);

  if (!error) {
    return [data, null];
  } else {
    return [null, error];
  }
}
