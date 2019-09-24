import { TestBed } from '@angular/core/testing';

import { TrackDiscoveryService } from './track-discovery.service';

describe('TrackDiscoveryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrackDiscoveryService = TestBed.get(TrackDiscoveryService);
    expect(service).toBeTruthy();
  });
});
