import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoccordionComponent } from './doccordion.component';

describe('DoccordionComponent', () => {
  let component: DoccordionComponent;
  let fixture: ComponentFixture<DoccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
