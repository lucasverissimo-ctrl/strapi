import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockInvestorArea } from './block-investor-area';

describe('BlockInvestorArea', () => {
  let component: BlockInvestorArea;
  let fixture: ComponentFixture<BlockInvestorArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockInvestorArea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockInvestorArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
