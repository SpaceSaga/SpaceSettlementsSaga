import {Component} from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'space-settlements-saga-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent {
  env = environment.environmentType
}
