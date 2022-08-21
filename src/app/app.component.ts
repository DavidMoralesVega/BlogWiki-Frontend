import { Component } from '@angular/core';
import { PwaService } from './core/services/pwa.service';

@Component({
  selector: 'app-zephyrus',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'DigitalAgencyZephyrus';

  constructor(private pwa: PwaService) {
    this.pwa.updatePWA();

  }

}
