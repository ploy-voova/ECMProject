import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './app/home/home.page.scss';
    document.head.appendChild(link);
  }
}
