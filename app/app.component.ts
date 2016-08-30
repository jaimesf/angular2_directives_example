import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DirectiveExampleComponent } from './directive-example/directive-example.component';

@Component({
  selector: 'my-app',
  directives: [ DirectiveExampleComponent ],
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  title = 'Directives example';
}
