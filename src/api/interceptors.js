import { HttpCode } from 'constants';

export function getRequestError(options) {
  return (error) => error;
}

export function getRequestSuccess(options) {
  return (req) => req;
}

export function getResponseSuccess(options) {
  return (res) => res;
}

export function getResponseError(options) {
  return (error) => {
    const status = error.response?.status || error.request?.status;
    switch (status) {
      case HttpCode.CLIENT_ERROR:
        console.error('Client Error');
        break;
      case HttpCode.NOT_FOUND:
        console.error('Not Found');
        break;
      case HttpCode.METHOD_NOT_ALLOWED:
        console.error('Method Not Allow');
        break;
      case HttpCode.NOT_ACCEPTABLE:
        console.error('Not Acceptable');
        break;
      case HttpCode.TIMEOUT:
        console.error('Timeout');
        break;
      case HttpCode.SERVER_ERROR:
        console.error('Server Error');
        break;
      case HttpCode.NOT_IMPLEMENTED:
        console.error('Not Implemented');
        break;
      case HttpCode.SERVICE_UNAVAILABLE:
        console.error('Service Unavailable');
        break;
      default:
        break;
    }
    return error;
  };
}
