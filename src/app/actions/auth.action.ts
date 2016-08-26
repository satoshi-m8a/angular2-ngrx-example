export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export function login(name: string, password: string) {
  return {type: LOGIN, payload: {name: name, password: password}};
}

export function loginSuccess(payload: any) {
  return {type: LOGIN_SUCCESS, payload: payload};
}

export function loginFailed() {
  return {type: LOGIN_FAILED};
}
