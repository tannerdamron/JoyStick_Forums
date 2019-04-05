import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSpecificForumsDetailsComponent } from './game-specific-forums-details.component';

describe('GameSpecificForumsDetailsComponent', () => {
  let component: GameSpecificForumsDetailsComponent;
  let fixture: ComponentFixture<GameSpecificForumsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSpecificForumsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSpecificForumsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
