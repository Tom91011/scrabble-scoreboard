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

  cards = [
    {
      icon: faPhone,
      title: "Call us",
      content: "We are available by phone 9am - 5pm",
      link: "0115 123 4567"
    }, {
      icon: faLocationPin,
      title: "Find us",
      content: "123 Fake Street, Someplace, Nottingham, NG1 2TR",
      link: "Open in maps"
    }
  ]
}