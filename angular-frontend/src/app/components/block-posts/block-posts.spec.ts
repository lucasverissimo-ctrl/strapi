import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockPosts } from './block-posts';

describe('BlockPosts', () => {
  let component: BlockPosts;
  let fixture: ComponentFixture<BlockPosts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockPosts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockPosts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
