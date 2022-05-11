import { Component } from '@angular/core';
import { faPhone, faLocationPin } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faPhone = faPhone
  faLocationPin = faLocationPin
}
