import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockContactForm } from './block-contact-form';

describe('BlockContactForm', () => {
  let component: BlockContactForm;
  let fixture: ComponentFixture<BlockContactForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockContactForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockContactForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
