import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalHomepage } from './global-homepage';

describe('GlobalHomepage', () => {
  let component: GlobalHomepage;
  let fixture: ComponentFixture<GlobalHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalHomepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalHomepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
