import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockHighlights } from './block-highlights';

describe('BlockHighlights', () => {
  let component: BlockHighlights;
  let fixture: ComponentFixture<BlockHighlights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockHighlights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockHighlights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
