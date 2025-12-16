import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryRedirectModal } from './country-redirect-modal';

describe('CountryRedirectModal', () => {
  let component: CountryRedirectModal;
  let fixture: ComponentFixture<CountryRedirectModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryRedirectModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryRedirectModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
