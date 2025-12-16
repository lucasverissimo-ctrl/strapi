import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockNews } from './block-news';

describe('BlockNews', () => {
  let component: BlockNews;
  let fixture: ComponentFixture<BlockNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
