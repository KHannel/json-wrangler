import { ArrayComponent } from './components/array/array.component';
import { ObjectComponent } from './components/object/object.component';
import { StringComponent } from './components/string/string.component';

export default [
  {
    type: 'array',
    component: ArrayComponent
  },
  {
    type: 'string',
    component: StringComponent
  },
  {
    type: 'object',
    component: ObjectComponent
  }
]
