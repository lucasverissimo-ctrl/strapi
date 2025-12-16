import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMock } from './home-mock';

describe('HomeMock', () => {
  let component: HomeMock;
  let fixture: ComponentFixture<HomeMock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
