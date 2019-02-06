import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrayComponent } from './components/array/array.component';
import { ObjectComponent } from './components/object/object.component';
import { StringComponent } from './components/string/string.component';
import { JsonWranglerComponent } from './json-wrangler.component';

@NgModule({
  declarations: [ArrayComponent, StringComponent, ObjectComponent, JsonWranglerComponent],
  entryComponents: [
    ArrayComponent,
    StringComponent,
    ObjectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [JsonWranglerComponent]
})
export class JsonWranglerModule { }
