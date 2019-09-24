import { TestBed } from '@angular/core/testing';

import { TrackRepoService } from './track-repo.service';

describe('TrackRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackRepoService = TestBed.get(TrackRepoService);
    expect(service).toBeTruthy();
  });
});
