import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageBr } from './homepage-br';

describe('HomepageBr', () => {
  let component: HomepageBr;
  let fixture: ComponentFixture<HomepageBr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageBr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageBr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
