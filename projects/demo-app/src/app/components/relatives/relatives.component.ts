import { Component, Input } from '@angular/core';
import { FirstNameComponent } from '../first-name/first-name.component';

@Component({
  selector: 'app-relatives',
  templateUrl: './relatives.component.html',
  styleUrls: ['./relatives.component.css']
})
export class RelativesComponent {
  @Input() key;
  @Input() value;

  rules = [
    {
      path: 'firstName',
      component: FirstNameComponent
    }
  ];
}
