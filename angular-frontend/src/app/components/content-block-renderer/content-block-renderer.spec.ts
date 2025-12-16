import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockRenderer } from './content-block-renderer';

describe('ContentBlockRenderer', () => {
  let component: ContentBlockRenderer;
  let fixture: ComponentFixture<ContentBlockRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentBlockRenderer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBlockRenderer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
