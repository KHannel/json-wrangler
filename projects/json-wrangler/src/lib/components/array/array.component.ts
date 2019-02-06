import { Component, Input } from '@angular/core';
import { TypeService } from 'projects/json-wrangler/src/services/type.service';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {
  @Input() key;
  @Input() value;

  constructor(public type: TypeService) {}
}
