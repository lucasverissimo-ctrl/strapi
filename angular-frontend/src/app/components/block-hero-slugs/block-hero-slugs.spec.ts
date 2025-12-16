import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockHeroSlugs } from './block-hero-slugs';

describe('BlockHeroSlugs', () => {
  let component: BlockHeroSlugs;
  let fixture: ComponentFixture<BlockHeroSlugs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockHeroSlugs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockHeroSlugs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
