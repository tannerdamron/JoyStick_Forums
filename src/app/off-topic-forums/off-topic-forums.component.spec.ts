import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffTopicForumsComponent } from './off-topic-forums.component';

describe('OffTopicForumsComponent', () => {
  let component: OffTopicForumsComponent;
  let fixture: ComponentFixture<OffTopicForumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffTopicForumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffTopicForumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
