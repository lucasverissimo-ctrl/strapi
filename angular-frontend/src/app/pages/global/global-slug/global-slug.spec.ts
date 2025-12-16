import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSlug } from './global-slug';

describe('GlobalSlug', () => {
  let component: GlobalSlug;
  let fixture: ComponentFixture<GlobalSlug>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalSlug]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalSlug);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
