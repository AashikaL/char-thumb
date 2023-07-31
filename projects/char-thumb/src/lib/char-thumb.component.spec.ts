import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharThumbComponent } from './char-thumb.component';

describe('CharThumbComponent', () => {
  let component: CharThumbComponent;
  let fixture: ComponentFixture<CharThumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharThumbComponent]
    });
    fixture = TestBed.createComponent(CharThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
