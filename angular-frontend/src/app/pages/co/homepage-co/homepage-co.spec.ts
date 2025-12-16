import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCo } from './homepage-co';

describe('HomepageCo', () => {
  let component: HomepageCo;
  let fixture: ComponentFixture<HomepageCo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageCo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageCo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
