import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import {WikiUiComponentsModule} from '@space-settlements-saga/wiki/ui/components';

@NgModule({
  declarations: [AppComponent,],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
        WikiUiComponentsModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
