import { TestBed } from '@angular/core/testing';

import { ConnectorDevicesService } from './connector-devices.service';

describe('ConnectorDevicesService', () => {
  let service: ConnectorDevicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectorDevicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
