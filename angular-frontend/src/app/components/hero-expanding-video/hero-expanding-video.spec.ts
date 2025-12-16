import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroExpandingVideo } from './hero-expanding-video';

describe('HeroExpandingVideo', () => {
  let component: HeroExpandingVideo;
  let fixture: ComponentFixture<HeroExpandingVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroExpandingVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroExpandingVideo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
