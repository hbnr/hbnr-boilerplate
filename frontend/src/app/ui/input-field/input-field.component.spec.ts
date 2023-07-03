import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldComponent } from 'src/app/ui/input-field/input-field.component';

describe('InputfieldComponent', () => {
  let component: InputFieldComponent;
  let fixture: ComponentFixture<InputFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFieldComponent]
    });
    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
