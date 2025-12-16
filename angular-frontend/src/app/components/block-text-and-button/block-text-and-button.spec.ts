import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTextAndButton } from './block-text-and-button';

describe('BlockTextAndButton', () => {
  let component: BlockTextAndButton;
  let fixture: ComponentFixture<BlockTextAndButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockTextAndButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockTextAndButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
