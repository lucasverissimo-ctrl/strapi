import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrHomepage } from './br-homepage';

describe('BrHomepage', () => {
  let component: BrHomepage;
  let fixture: ComponentFixture<BrHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrHomepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrHomepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
