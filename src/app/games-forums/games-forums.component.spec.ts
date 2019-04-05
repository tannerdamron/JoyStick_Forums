import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesForumsComponent } from './games-forums.component';

describe('GamesForumsComponent', () => {
  let component: GamesForumsComponent;
  let fixture: ComponentFixture<GamesForumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesForumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesForumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
