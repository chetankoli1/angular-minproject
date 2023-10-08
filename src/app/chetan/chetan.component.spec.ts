import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChetanComponent } from './chetan.component';

describe('ChetanComponent', () => {
  let component: ChetanComponent;
  let fixture: ComponentFixture<ChetanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChetanComponent]
    });
    fixture = TestBed.createComponent(ChetanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
