import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectorDevicesComponent } from './connector-devices.component';

describe('ConnectorDevicesComponent', () => {
  let component: ConnectorDevicesComponent;
  let fixture: ComponentFixture<ConnectorDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectorDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectorDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
