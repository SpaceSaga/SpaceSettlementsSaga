import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';

import {pages} from './pages/pages';

@NgModule({
  declarations: [AppComponent, pages],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
