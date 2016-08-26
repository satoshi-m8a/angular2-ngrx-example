import {Component} from '@angular/core';
import {CollapseDirective} from 'ng2-bootstrap';

@Component({
  selector: 'cp-header',
  templateUrl: 'header.component.html',
  directives: [CollapseDirective]
})
export class HeaderComponent {
  public isCollapsed: boolean = true;
}
