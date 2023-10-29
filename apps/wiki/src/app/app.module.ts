import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {pages} from './pages/pages';
import { MarkdownReaderModule } from '@space-settlements-saga/markdown-reader';

@NgModule({
  declarations: [AppComponent, pages],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    MarkdownReaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
