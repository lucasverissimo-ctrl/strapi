import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlugCo } from './slug-co';

describe('SlugCo', () => {
  let component: SlugCo;
  let fixture: ComponentFixture<SlugCo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlugCo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlugCo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
