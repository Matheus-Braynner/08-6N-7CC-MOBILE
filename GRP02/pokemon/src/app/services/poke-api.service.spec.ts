import { TestBed } from '@angular/core/testing';

import { PokeAPIService } from './poke-api.service';

describe('PokeApiService', () => {
  let service: PokeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
