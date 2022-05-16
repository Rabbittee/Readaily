export function getRequestError(options) {
  return (error) => error;
}

export function getRequestSuccess(options) {
  return (req) => req;
}

export function getResponseSuccess(options) {
  return (res) => res;
}

const HttpCode = {
  CLIENT_ERROR: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  TIMEOUT: 408,
  SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  SERVICE_UNAVAILABLE: 503,
};
