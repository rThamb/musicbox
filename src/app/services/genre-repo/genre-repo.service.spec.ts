import { TestBed } from '@angular/core/testing';

import { GenreRepoService } from './genre-repo.service';

describe('GenreRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenreRepoService = TestBed.get(GenreRepoService);
    expect(service).toBeTruthy();
  });
});
