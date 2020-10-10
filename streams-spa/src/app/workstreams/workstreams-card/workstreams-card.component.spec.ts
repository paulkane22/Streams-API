import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstreamsCardComponent } from './workstreams-card.component';

describe('WorkstreamsCardComponent', () => {
  let component: WorkstreamsCardComponent;
  let fixture: ComponentFixture<WorkstreamsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkstreamsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkstreamsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
