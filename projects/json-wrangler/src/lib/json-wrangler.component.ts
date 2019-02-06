import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TypeService } from '../services/type.service';
import defaultRules from './default-rules';

@Component({
  selector: 'lib-json-wrangler',
  template: '<ng-container #container></ng-container>',
  styles: []
})
export class JsonWranglerComponent implements OnInit {
  @Input() json;
  @Input() rules = [];

  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private type: TypeService
  ) {}

  ngOnInit() {
    if (!this.rules.length) {
      this.rules = defaultRules;
    }

    if (typeof this.json === 'object') {
      Object.keys(this.json).forEach(key => {
        const value = this.json[key];
        const valueType = typeof value;

        const matchingRule = this.rules.find(rule => {
          switch (rule.type) {
            case 'array':
              return this.type.isArray(value);
            case 'object':
              return this.type.isObject(value);
            case 'string':
              return this.type.isString(value);
          }
        });

        if (matchingRule) {
          const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            matchingRule.component
          );
          const componentRef = this.container.createComponent(componentFactory);
          (<any>componentRef.instance).key = key;
          (<any>componentRef.instance).value = value;
        }
      });
    }
  }
}
