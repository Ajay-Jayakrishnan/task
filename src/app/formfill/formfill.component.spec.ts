import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfillComponent } from './formfill.component';

describe('FormfillComponent', () => {
  let component: FormfillComponent;
  let fixture: ComponentFixture<FormfillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormfillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormfillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
