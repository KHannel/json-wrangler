import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonWranglerComponent } from './json-wrangler.component';

describe('JsonWranglerComponent', () => {
  let component: JsonWranglerComponent;
  let fixture: ComponentFixture<JsonWranglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonWranglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonWranglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
