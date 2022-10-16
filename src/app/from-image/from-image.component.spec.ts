import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromImageComponent } from './from-image.component';

describe('FromImageComponent', () => {
  let component: FromImageComponent;
  let fixture: ComponentFixture<FromImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
