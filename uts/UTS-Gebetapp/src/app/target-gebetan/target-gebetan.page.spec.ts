import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetGebetanPage } from './target-gebetan.page';

describe('TargetGebetanPage', () => {
  let component: TargetGebetanPage;
  let fixture: ComponentFixture<TargetGebetanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetGebetanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetGebetanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
