import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffTopicForumsDetailsComponent } from './off-topic-forums-details.component';

describe('OffTopicForumsDetailsComponent', () => {
  let component: OffTopicForumsDetailsComponent;
  let fixture: ComponentFixture<OffTopicForumsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffTopicForumsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffTopicForumsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
