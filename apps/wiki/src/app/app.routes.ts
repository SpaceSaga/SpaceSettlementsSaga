import {Route} from '@angular/router';
import {NotFoundComponent, WelcomeComponent} from './pages';

export const appRoutes: Route[] = [
  {path: '', component: WelcomeComponent},
  {path: '**', component: NotFoundComponent}
];
