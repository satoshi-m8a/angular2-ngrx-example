import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './reducers/counter.reducer';
import {AuthEffects} from './effects/auth.effect';
import {EffectsModule} from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/operator/map';
import 'rxjs/operator/catch';
import {authReducer} from './reducers/auth.reducer';
import {routes} from './routes';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({counter: counterReducer, auth: authReducer}, {counter: 0, auth: {}}),
    EffectsModule.run(AuthEffects),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
