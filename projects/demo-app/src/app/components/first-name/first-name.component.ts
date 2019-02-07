import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-first-name',
  templateUrl: './first-name.component.html',
  styleUrls: ['./first-name.component.css']
})
export class FirstNameComponent {
  @Input() key;
  @Input() value;
}
