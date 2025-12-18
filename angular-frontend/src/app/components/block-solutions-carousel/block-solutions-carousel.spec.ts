import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockSolutionsCarousel } from './block-solutions-carousel';

describe('BlockSolutionsCarousel', () => {
  let component: BlockSolutionsCarousel;
  let fixture: ComponentFixture<BlockSolutionsCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockSolutionsCarousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockSolutionsCarousel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
