import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
  }

  isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
  }

  isString(value) {
    return typeof value === 'string';
  }
}
