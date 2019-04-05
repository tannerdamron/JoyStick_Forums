import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosForumsComponent } from './studios-forums.component';

describe('StudiosForumsComponent', () => {
  let component: StudiosForumsComponent;
  let fixture: ComponentFixture<StudiosForumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiosForumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiosForumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
