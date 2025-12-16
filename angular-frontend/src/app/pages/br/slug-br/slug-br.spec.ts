import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlugBr } from './slug-br';

describe('SlugBr', () => {
  let component: SlugBr;
  let fixture: ComponentFixture<SlugBr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlugBr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlugBr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
