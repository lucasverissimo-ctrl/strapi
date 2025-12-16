import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrSlug } from './br-slug';

describe('BrSlug', () => {
  let component: BrSlug;
  let fixture: ComponentFixture<BrSlug>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrSlug]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrSlug);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
