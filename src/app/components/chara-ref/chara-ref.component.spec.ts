import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaRefComponent } from './chara-ref.component';

describe('CharaRefComponent', () => {
  let component: CharaRefComponent;
  let fixture: ComponentFixture<CharaRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharaRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
