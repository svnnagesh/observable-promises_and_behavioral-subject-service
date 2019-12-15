import { TestBed } from '@angular/core/testing';

import { BehaviouralSubjectService } from './behavioural-subject.service';

describe('BehaviouralSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BehaviouralSubjectService = TestBed.get(BehaviouralSubjectService);
    expect(service).toBeTruthy();
  });
});
