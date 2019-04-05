import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioForumsDetailsComponent } from './studio-forums-details.component';

describe('StudioForumsDetailsComponent', () => {
  let component: StudioForumsDetailsComponent;
  let fixture: ComponentFixture<StudioForumsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudioForumsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudioForumsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
