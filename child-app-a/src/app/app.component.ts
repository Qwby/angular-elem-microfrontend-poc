import {Component, Injector, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-child-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'child-app-a';

  @Input()
  message: string;

}
