import { TestBed } from '@angular/core/testing';

import { NotificationToastServiceService } from './notification-toast-service.service';

describe('NotificationToastServiceService', () => {
  let service: NotificationToastServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationToastServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
