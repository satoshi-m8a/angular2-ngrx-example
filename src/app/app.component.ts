import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import 'alexa-voice-service';
import {Observable} from 'rxjs/Observable';
import * as CountAction from './actions/count.action';
import * as AuthAction from './actions/auth.action';
import {AppState} from './states/app.state';
import {AuthState} from './states/auth.state';
import {HeaderComponent} from './components/header/header.component';
declare var AVS: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent]
})
export class AppComponent {
  counter: Observable<number>;
  auth: Observable<AuthState>;

  constructor(public store: Store<AppState & AuthState>) {
    this.counter = store.select<number>('counter');
    this.auth = store.select<AuthState>('auth');
  }

  increment() {
    this.store.dispatch(CountAction.increment());
  }

  decrement() {
    this.store.dispatch(CountAction.decrement());
  }

  reset() {
    this.store.dispatch(CountAction.reset());
  }

  login() {
    this.store.dispatch(AuthAction.login('name1', 'password1'));
  }
}
