import {ActionReducer, Action} from '@ngrx/store';
import {LOGIN, LOGIN_SUCCESS, LOGIN_FAILED} from '../actions/auth.action';
import {AuthState} from '../states/auth.state';

export const authReducer: ActionReducer<AuthState> = (state: AuthState, action: Action) => {
  switch (action.type) {
    case LOGIN:
      state.sessionId = 'sid0';
      state.loading = true;
      return state;
    case LOGIN_SUCCESS:
      state.sessionId = 'sid2';
      state.loading = false;
      return state;
    case LOGIN_FAILED:
      state.sessionId = 'null';
      state.loading = false;
      return state;
    default:
      return state;
  }
};
