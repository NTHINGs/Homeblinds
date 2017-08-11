import { Component } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

// Component decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Any method defined here is accesible by the template
export class AppComponent {
  admin = true;
  constructor() {
      PageScrollConfig.defaultScrollOffset = 80;
      PageScrollConfig.defaultDuration = 500;
  }
}
