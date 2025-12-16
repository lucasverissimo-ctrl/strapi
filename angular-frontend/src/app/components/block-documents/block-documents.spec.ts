import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockDocuments } from './block-documents';

describe('BlockDocuments', () => {
  let component: BlockDocuments;
  let fixture: ComponentFixture<BlockDocuments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockDocuments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockDocuments);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
