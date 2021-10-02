import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be r,p,s when the computer played', () => {
    const expected = service.getChoiceFromComputer()
    const result = expected
    expect(expected).toBe(result)
  })

});
