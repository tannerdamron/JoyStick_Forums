import { TestBed, inject } from '@angular/core/testing';

import { UserForumsService } from './user-forums.service';

describe('UserForumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserForumsService]
    });
  });

  it('should be created', inject([UserForumsService], (service: UserForumsService) => {
    expect(service).toBeTruthy();
  }));
});
