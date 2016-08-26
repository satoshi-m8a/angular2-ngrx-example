import {Injectable, OnDestroy} from '@angular/core';
import {Http} from '@angular/http';
import {Actions, Effect} from '@ngrx/effects';
import * as Rx from 'rxjs/Rx';
import * as AuthAction from '../actions/auth.action';
import {LOGIN} from '../actions/auth.action';

@Injectable()
export class AuthEffects implements OnDestroy {
  constructor(private http: Http,
              private actions$: Actions) {
  }

  @Effect() login$ = this.actions$
    .ofType(LOGIN)
    .map(action => JSON.stringify(action.payload))
    .switchMap(payload => this.http.post('https://jsonplaceholder.typicode.com/posts', payload)
      .map(res => (AuthAction.loginSuccess(res.json())))
      .catch(() => Rx.Observable.of(AuthAction.loginFailed())));

  ngOnDestroy() {
    console.log('destroy');
  }
}
