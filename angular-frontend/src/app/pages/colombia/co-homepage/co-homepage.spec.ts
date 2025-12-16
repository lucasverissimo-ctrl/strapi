import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoHomepage } from './co-homepage';

describe('CoHomepage', () => {
  let component: CoHomepage;
  let fixture: ComponentFixture<CoHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoHomepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoHomepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
