import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockHero } from './block-hero';

describe('BlockHero', () => {
  let component: BlockHero;
  let fixture: ComponentFixture<BlockHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
