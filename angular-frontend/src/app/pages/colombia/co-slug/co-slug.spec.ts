import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoSlug } from './co-slug';

describe('CoSlug', () => {
  let component: CoSlug;
  let fixture: ComponentFixture<CoSlug>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoSlug]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoSlug);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
